<script lang="ts">
  import { css } from '@stitches/core';

  import { getRandomNumber } from '../../utils/getRandomNumber';
  import colors from '../../data/colors.json';
  import { isDark } from '../../data/store';

  const random = getRandomNumber(0, colors.light.length);

  const theme = css({
    minHeight: '100vh',
    '--light-primary': `${colors.light[random]}`,
    '--dark-primary': `${colors.dark[random]}`,

    variants: {
      isDark: {
        true: {
          color: 'rgb(var(--dark-onSurface))',
        },
        false: {
          color: 'rgb(var(--light-onSurface))',
        },
      },
    },
  });
</script>

<main class={theme({ isDark: $isDark })}>
  <slot />
</main>
