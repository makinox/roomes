<script lang="ts">
  import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faHome, faAdjust } from '@fortawesome/free-solid-svg-icons';
  import { FluidContainer, TopBar } from '@makinox/makinox-ui';
  import { FontAwesomeIcon } from 'fontawesome-svelte';
  import { css } from '@stitches/core';

  import { isDark } from '../../data/store';

  const linkTheme = css({
    cursor: 'pointer',
    padding: '0 1px',

    variants: {
      isDark: {
        true: {
          color: 'rgb(var(--dark-primary))',
        },
        false: {
          color: 'rgb(var(--light-primary))',
        },
      },
    },
  });

  const sectionTheme = css({
    variants: {
      isDark: {
        true: {
          backgroundColor: 'rgba(var(--dark-background), 0.8) !important',
        },
        false: {
          backgroundColor: 'rgba(var(--light-background), 0.4) !important',
        },
      },
    },
  });
</script>

<header class={FluidContainer()}>
  <nav class={`flex justify-between ${TopBar({ isDark: $isDark })} ${sectionTheme({ isDark: $isDark })}`}>
    <div>
      <span>Roomes</span>
      <span class={linkTheme({ isDark: $isDark })} on:click={isDark.toggle}>
        <FontAwesomeIcon icon={faAdjust} />
      </span>
    </div>

    <div>
      <a class={linkTheme({ isDark: $isDark })} target="_blank" rel="noopener noreferrer" href="https://jesusbossa.dev">
        <FontAwesomeIcon icon={faHome} /></a
      >
      <a class={linkTheme({ isDark: $isDark })} target="_blank" rel="noopener noreferrer" href="https://twitter.com/jesMakinox"
        ><FontAwesomeIcon icon={faTwitter} /></a
      >
      <a class={linkTheme({ isDark: $isDark })} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/makinox/"
        ><FontAwesomeIcon icon={faLinkedin} /></a
      >
    </div>
  </nav>
</header>

<style>
  header {
    padding-top: 10px;
  }
  nav {
    border-radius: 20px;
    padding: 10px;
    width: 97vw;
    max-width: 100%;
  }
</style>
