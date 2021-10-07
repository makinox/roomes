<script lang="ts">
  import { FluidContainer } from '@makinox/makinox-ui';
  import CardArtitcle from '../CardArtitcle/CardArtitcle.svelte';
</script>

<section class={`flex justify-between ${FluidContainer()}`}>
  <CardArtitcle title="Panela" />
  <CardArtitcle title="Sal" />
  <CardArtitcle title="Carton" />
</section>

<style>
  section {
    border: 1px solid red;
    margin-top: 10px;
    padding: 20px;
  }
</style>
