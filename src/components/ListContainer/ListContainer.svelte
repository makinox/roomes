<script lang="ts">
  import { FluidContainer } from '@makinox/makinox-ui';
  import { css } from '@stitches/core';

  import CardArtitcle from '../CardArtitcle/CardArtitcle.svelte';
  import { isDark } from '../../data/store';
  import dbCards from '../../data/db.json';

  const sectionTheme = css({
    variants: {
      isDark: {
        true: {
          backgroundColor: 'rgba(var(--dark-background), 0.8)',
        },
        false: {
          backgroundColor: 'rgba(var(--light-background), 0.4)',
        },
      },
    },
  });
</script>

<section class={`flex justify-center ${FluidContainer()} ${sectionTheme({ isDark: $isDark })}`}>
  {#each dbCards as card}
    <CardArtitcle title={card.name} description={card.description} image={card.imageSmall} link={card.link} />
  {/each}
</section>

<div />

<style>
  section {
    box-shadow: rgb(0 0 0 / 3%) 3px 3px 10px 3px;
    backdrop-filter: blur(5px);
    border-radius: 20px;
    margin: 0 5px;
    margin-top: 40px;
    flex-wrap: wrap;
    padding: 20px;
  }

  div {
    padding-bottom: 100px;
  }
</style>
