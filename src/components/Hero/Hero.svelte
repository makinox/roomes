<script lang="ts">
  import { FluidContainer } from '@makinox/makinox-ui';
  import Gradient from '../../assets/gradient.svelte';
</script>

<section class={FluidContainer()}>
  <h1>Hola buenas tardes</h1>
  <Gradient class="hero-gradient" />
</section>

<style>
  :global(.hero-gradient) {
    position: fixed;
    z-index: -1;
    right: 0;
    left: 0;
    top: 0;
  }
</style>
