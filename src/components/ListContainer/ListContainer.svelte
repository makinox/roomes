<script lang="ts">
  import { FluidContainer } from '@makinox/makinox-ui';
  import CardArtitcle from '../CardArtitcle/CardArtitcle.svelte';
</script>

<section class={`flex justify-center ${FluidContainer()}`}>
  <CardArtitcle title="Panela" />
  <CardArtitcle title="Sal" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
  <CardArtitcle title="Carton" />
</section>

<style>
  section {
    border: 1px solid red;
    margin-top: 10px;
    flex-wrap: wrap;
    padding: 20px;
  }
</style>
