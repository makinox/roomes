<script lang="ts">
  import { FluidContainer, TopBar } from '@makinox/makinox-ui';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faHome } from '@fortawesome/free-solid-svg-icons';
  import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  library.add(faHome);
</script>

<header class={FluidContainer()}>
  <nav class={`flex justify-between ${TopBar()}`}>
    <div>
      <span>Roomes</span>
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

  nav div:last-of-type a {
    color: red;
  }
</style>
