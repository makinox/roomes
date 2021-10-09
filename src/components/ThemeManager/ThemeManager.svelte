<script lang="ts">
  import { css } from '@stitches/core';
  import { isDark } from '../../data/store';

  const theme = css({
    variants: {
      isDark: {
        true: {
          backgroundColor: 'rgb(var(--dark-surface))',
          color: 'rgb(var(--dark-onSurface))',
        },
        false: {
          backgroundColor: 'rgb(var(--light-surface))',
          color: 'rgb(var(--light-onSurface))',
        },
      },
    },
  });
</script>

<main class={theme({ isDark: $isDark })}>
  <slot />
</main>
