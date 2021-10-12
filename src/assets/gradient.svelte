<script lang="ts">
  import { getRandomNumber } from '../utils/getRandomNumber';
  import { isDark } from '../data/store';

  const canvasWidth = `${window.outerWidth}px`;
  const canvasHeight = `${window.outerHeight}px`;

  const random = getRandomNumber(1, 4);

  let colorBack = 'rgb(var(--light-background))';
  let colorFill = `rgb(var(--light-primary))`;

  isDark.subscribe((value) => {
    if (value) {
      colorBack = 'rgb(var(--dark-background))';
      colorFill = `rgb(var(--dark-primary))`;
    } else {
      colorBack = 'rgb(var(--light-background))';
      colorFill = `rgb(var(--light-primary))`;
    }
  });
</script>

<svg
  id="visual"
  viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
  class={$$props.class}
  width={canvasWidth}
  height={canvasHeight}
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
>
  <defs>
    <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="163" result="effect1_foregroundBlur" />
    </filter>
  </defs>
  <rect width={canvasWidth} height={canvasHeight} fill={colorBack} />
  <g filter="url(#blur1)">
    {#if random === 1}
      <circle cx="845" cy="356" fill={colorFill} r="363" />
      <circle cx="67" cy="321" fill={colorBack} r="363" />
      <circle cx="277" cy="492" fill={colorFill} r="363" />
      <circle cx="78" cy="23" fill={colorFill} r="363" />
      <circle cx="594" cy="490" fill={colorBack} r="363" />
      <circle cx="651" cy="180" fill={colorFill} r="363" />
    {:else if random === 2}
      <circle cx="954" cy="496" fill={colorBack} r="363" />
      <circle cx="733" cy="514" fill={colorFill} r="363" />
      <circle cx="648" cy="70" fill={colorBack} r="363" />
      <circle cx="502" cy="537" fill={colorBack} r="363" />
      <circle cx="269" cy="243" fill={colorFill} r="363" />
      <circle cx="936" cy="94" fill={colorBack} r="363" />
    {:else}
      <circle cx="918" cy="268" fill={colorFill} r="363" />
      <circle cx="439" cy="43" fill={colorBack} r="363" />
      <circle cx="717" cy="152" fill={colorFill} r="363" />
      <circle cx="151" cy="96" fill={colorFill} r="363" />
      <circle cx="380" cy="324" fill={colorBack} r="363" />
      <circle cx="107" cy="529" fill={colorFill} r="363" />
    {/if}
  </g>
</svg>
