<script lang="ts">
  import { onMount, onDestroy } from "svelte";

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
    'lavender'
  ];

  let interval: NodeJS.Timeout;
  let element: HTMLDivElement;

  function swapColor(): void {
      const color = colors[Math.floor(Math.random() * colors.length)];
      element.style.setProperty('--shadow-color', `var(--${color})`);
  }

  onMount(() => {
    swapColor();

    interval = setInterval(swapColor, 5 * 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div bind:this={element}></div>

<style>
  div {
    --shadow-color: var(--blue);
    position: fixed;
    transition: box-shadow ease-in-out 2s;
    box-shadow: inset 0 -5dvh max(10dvw, 10dvh)
      rgba(from var(--shadow-color) r g b / 0.1);
    background-color: var(--crust);
    width: 100dvw;
    height: 100dvh;

    @media print {
      display: none;
    }
  }
</style>
