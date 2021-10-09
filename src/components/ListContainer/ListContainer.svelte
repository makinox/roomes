<script lang="ts">
  import { FluidContainer } from '@makinox/makinox-ui';

  import CardArtitcle from '../CardArtitcle/CardArtitcle.svelte';
  import dbCards from '../../data/db.json';
</script>

<section class={`flex justify-center ${FluidContainer()}`}>
  {#each dbCards as card}
    <CardArtitcle title={card.name} />
  {/each}
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
