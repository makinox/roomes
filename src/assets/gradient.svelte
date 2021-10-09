<script lang="ts">
  let color1 = '#000000';
  let color2 = '#ffffff';

  const random = Math.floor(Math.random() * (4 - 1)) + 1;
  console.log({ random });
</script>

<svg
  id="visual"
  viewBox="0 0 960 540"
  class={$$props.class}
  width={window.outerWidth}
  height={window.outerHeight - 65}
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
  <rect width={window.outerWidth} height={window.outerHeight - 65} fill={color1} />
  <g filter="url(#blur1)">
    {#if random === 1}
      <circle cx="845" cy="356" fill={color2} r="363" />
      <circle cx="67" cy="321" fill={color1} r="363" />
      <circle cx="277" cy="492" fill={color2} r="363" />
      <circle cx="78" cy="23" fill={color2} r="363" />
      <circle cx="594" cy="490" fill={color1} r="363" />
      <circle cx="651" cy="180" fill={color2} r="363" />
    {:else if random === 2}
      <circle cx="954" cy="496" fill={color1} r="363" />
      <circle cx="733" cy="514" fill={color2} r="363" />
      <circle cx="648" cy="70" fill={color1} r="363" />
      <circle cx="502" cy="537" fill={color1} r="363" />
      <circle cx="269" cy="243" fill={color2} r="363" />
      <circle cx="936" cy="94" fill={color1} r="363" />
    {:else}
      <circle cx="918" cy="268" fill={color2} r="363" />
      <circle cx="439" cy="43" fill={color1} r="363" />
      <circle cx="717" cy="152" fill={color2} r="363" />
      <circle cx="151" cy="96" fill={color2} r="363" />
      <circle cx="380" cy="324" fill={color1} r="363" />
      <circle cx="107" cy="529" fill={color2} r="363" />
    {/if}
  </g>
</svg>
