<script setup>
import LinkButton from "@/components/LinkButton.vue";
import UH1 from "@/components/UH1.vue";
import UHeader from "@/components/UHeader.vue";
import UMain from "@/components/UMain.vue";
import UPage from "@/components/UPage.vue";
import { onMounted, ref } from "vue";

class MultiPropertyAnimation {
  constructor(element) {
    this.element = element;
    this.duration = 3000;
    this.startTime = null;
  }
  start() {
    const animate = (currentTime) => {
      if (!this.startTime) {
        this.startTime = currentTime;
      }
      let progress =
        ((currentTime - this.startTime) % this.duration) / this.duration;
      // Вычисляем промежуточные значения
      const position = this.calculatePosition(progress);
      const color = this.calculateColor(progress);
      const rotation = this.calculateRotation(progress);
      // Применяем стили
      this.element.style.left = `${position}px`;
      this.element.style.backgroundColor = color;
      this.element.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
  calculatePosition(progress) {
    if (progress <= 0.5) {
      return progress * 2 * 200; // 0 -> 200
    } else {
      return (1 - (progress - 0.5) * 2) * 200; // 200 -> 0
    }
  }
  calculateColor(progress) {
    if (progress <= 0.5) {
      // От plum к blue
      const r = Math.round(221 - 221 * (progress * 2));
      const g = Math.round(160 - 160 * (progress * 2));
      const b = Math.round(221 + (255 - 221) * (progress * 2));
      return `rgb(${r},${g},${b})`;
    } else {
      const p = (progress - 0.5) * 2;
      const r = Math.round(0 + 221 * p);
      const g = Math.round(0 + 160 * p);
      const b = Math.round(255 - (255 - 221) * p);
      return `rgb(${r},${g},${b})`;
    }
  }
  calculateRotation(progress) {
    return progress * 360;
  }
}

const timingFunctions = {
  linear: (progress) => progress,
  easeIn: (progress) => progress * progress,
  easeOut: (progress) => 1 - Math.pow(1 - progress, 2),
  easeInOut: (progress) => {
    if (progress < 0.5) {
      return 2 * progress * progress;
    } else {
      return 1 - Math.pow(-2 * progress + 2, 2) / 2;
    }
  },
  bounce: (progress) => {
    const bounce = 4;
    let result = 0;
    for (let i = 0; i < bounce; i++) {
      let p = (i + 1) / bounce;
      let amp = Math.pow(0.5, i);
      if (progress <= p) {
        result = amp * Math.pow(progress - (p - 1 / bounce), 2);
        break;
      }
    }
    return 1 - result;
  },
};

class AnimationController {
  constructor() {
    this.animations = new Map();
    this.isPlaying = false;
  }
  add(name, element, properties, options = {}) {
    const defaultOptions = {
      duration: 1000,
      timing: "linear",
      iterations: 1,
      delay: 0,
    };
    const animationOptions = { ...defaultOptions, ...options };
    this.animations.set(name, {
      element,
      properties,
      options: animationOptions,
      startTime: null,
      currentIteration: 0,
    });
  }
  start(name) {
    const animation = this.animations.get(name);
    if (!animation) return;
    animation.startTime = performance.now() + animation.options.delay;
    this.isPlaying = true;
    const animate = (currentTime) => {
      if (!this.isPlaying) return;
      if (currentTime < animation.startTime) {
        requestAnimationFrame(animate);
        return;
      }
      let progress =
        (currentTime - animation.startTime) / animation.options.duration;
      if (progress >= 1) {
        animation.currentIteration++;
        if (
          animation.options.iterations === "infinite" ||
          animation.currentIteration < animation.options.iterations
        ) {
          animation.startTime = currentTime;
          progress = 0;
        } else {
          this.isPlaying = false;
          return;
        }
      }
      // Применяем временную функцию
      const timingFunction = timingFunctions[animation.options.timing];
      const easedProgress = timingFunction(progress);
      // Обновляем свойства
      this.updateProperties(
        animation.element,
        animation.properties,
        easedProgress
      );
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
  updateProperties(element, properties, progress) {
    Object.entries(properties).forEach(([prop, values]) => {
      if (typeof values.from === "number" && typeof values.to === "number") {
        const current = values.from + (values.to - values.from) * progress;
        element.style[prop] = `${current}${values.unit || ""}`;
      }
    });
  }
  pause() {
    this.isPlaying = false;
  }
  resume() {
    this.isPlaying = true;
    this.animations.forEach((animation, name) => {
      this.start(name);
    });
  }
  stop() {
    this.isPlaying = false;
    this.animations.forEach((animation) => {
      animation.currentIteration = 0;
      animation.startTime = null;
    });
  }
}

onMounted = (() => {
    const controller = new AnimationController();
    const element = document.getElementById("circle-motion");
    controller.add(
        "circle",
        element,
        {
            transform: {
            from: 0,
            to: 360,
            unit: "deg",
            custom: (progress, value) => {
                const angle = value * (Math.PI / 180);
                const radius = 100;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return `translate(${x}px, ${y}px)`;
            },
            },
        },
        {
            duration: 3000,
            timing: "linear",
            iterations: "infinite",
        }
    );
    controller.start("circle");


    const bounceController = new AnimationController();
    const bounceElement = document.getElementById("bounce");
    bounceController.add(
    "bounce",
    bounceElement,
    {
        transform: {
        from: 0,
        to: 200,
        unit: "px",
        custom: (progress, value) => {
            const bounce =
            Math.sin(progress * Math.PI * 2) * Math.exp(-progress * 3);
            return `translateY(${value * bounce}px)`;
        },
        },
    },
    {
        duration: 2000,
        timing: "linear",
        iterations: "infinite",
    }
    );
    bounceController.start("bounce");
});
</script>

<template>
  <UPage>
    <UHeader />
    <UMain>
      <div class="text-center my-10">
        <h2 class="text-2xl text-accent">Жоркин Игорь</h2>
        <h2 class="text-2xl text-accent">3ИСИП-722</h2>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div class="rounded-full size-20 bg-red-400" id="circle-motion"></div>
        <div class="rounded-full size-20 bg-red-400" id="bounce"></div>
      </div>
    </UMain>
  </UPage>
</template>
