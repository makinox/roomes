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
    background-color: rgba(var(--light-background), 1);
    box-shadow: rgb(0 0 0 / 3%) 3px 3px 10px 3px;
    backdrop-filter: blur(2px);
    border-radius: 20px;
    margin-top: 10px;
    flex-wrap: wrap;
    padding: 20px;
  }
</style>
