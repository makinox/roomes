<script lang="ts">
  import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faHome, faAdjust } from '@fortawesome/free-solid-svg-icons';
  import { FluidContainer, TopBar } from '@makinox/makinox-ui';
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  import { isDark } from '../../data/store';
</script>

<header class={FluidContainer()}>
  <nav class={`flex justify-between ${TopBar({ isDark: $isDark })}`}>
    <div>
      <span>Roomes</span>
      <span on:click={isDark.toggle}>
        <FontAwesomeIcon icon={faAdjust} />
      </span>
    </div>

    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://jesusbossa.dev"> <FontAwesomeIcon icon={faHome} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jesMakinox"><FontAwesomeIcon icon={faTwitter} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/makinox/"><FontAwesomeIcon icon={faLinkedin} /></a>
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
  }

  nav div:last-of-type a,
  nav div:first-of-type span:last-of-type {
    cursor: pointer;
    color: red;
  }
</style>
