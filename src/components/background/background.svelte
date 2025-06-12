<script lang="ts">
  import { onMount } from "svelte";

  let bgEl: HTMLDivElement;
  let bgCol = '';

  const colors = [
    'rosewater',
    'flamingo',
    'pink',
    'mauve',
    'red',
    'maroon',
    'peach',
    'yellow',
    'green',
    'teal',
    'sky',
    'sapphire',
    'blue',
    'lavender',
  ];

  class BackgroundNode {
    el: HTMLDivElement;
    x = 0;
    y = 0;
    dur = 0;

    move_harsh(x: number, y: number): void {
      this.x = x;
      this.y = y;

      this.el.style.setProperty('transition-property', 'background-color');

      requestAnimationFrame(() => {
        this.el.style.setProperty('left', `${x}dvw`);
        this.el.style.setProperty('top', `${y}dvh`);
      });
    }

    async move_smooth(x: number, y: number): Promise<void> {
      this.x = x;
      this.y = y;

      this.el.style.setProperty(
        'transition-property',
        'background-color, left, top'
      );

      requestAnimationFrame(() => {
        this.el.style.setProperty('left', `${x}dvw`);
        this.el.style.setProperty('top', `${y}dvh`);
      });
    }

    async move() {
      const x1 = Math.floor(Math.random() * 100);
      const y1 = Math.floor(Math.random() * 100);

      this.move_harsh(x1, y1);

      this.dur = 5 + Math.random() * 5;
      this.el.style.setProperty('transition-duration', `${this.dur}s`);

      await new Promise((resolve) => setTimeout(resolve));

      const x2 = Math.floor(Math.random() * 100);
      const y2 = Math.floor(Math.random() * 100);

      this.move_smooth(x2, y2);

      const color = colors.filter((item) => item !== bgCol)[
        Math.floor(Math.random() * colors.length)
      ];
      this.el.style.setProperty('background-color', `var(--${color})`);

      await new Promise((resolve) => setTimeout(resolve, this.dur * 1000));

      this.move();
    }

    constructor() {
      const color = colors[Math.floor(Math.random() * colors.length)];

      this.el = document.createElement('div');
      this.el.className = 'background-node';
      this.el.style.setProperty('background-color', `var(--${color})`);
      this.el.setAttribute('aria-hidden', 'true');

      this.move();
    }
  }

  function updateBg() {
    if (!bgEl) return;

    bgCol = colors[Math.floor(Math.random() * colors.length)];
    bgEl.style.setProperty('background-color', `var(--${bgCol})`);

    setTimeout(updateBg, 10 * 1000);
  }

  onMount(() => {
    console.log('onMount called');

    for (let i = 0; i < 5; i++) {
      bgEl!.appendChild(new BackgroundNode().el);
    }

    updateBg();
  });

</script>

<div id="background-anchor" aria-hidden="true" bind:this={bgEl}></div>

<style>
  #background-anchor {
    position: fixed;
    transition: background-color 10s ease-in-out;
    background-color: var(--sky);
    width: 100dvw;
    height: 100dvh;

    & :global .background-node {
      position: fixed;
      translate: -50% -50%;
      filter: blur(max(55dvw, 55dvh));
      transition-timing-function: ease-in-out;
      border-radius: 100%;
      width: max(75dvw, 77dvh);
      height: max(77dvw, 77dvh);
    }
  }
</style>
