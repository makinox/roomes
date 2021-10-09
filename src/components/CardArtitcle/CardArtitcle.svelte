<script>
  import { Card, ButtonText } from '@makinox/makinox-ui';

  import { isDark } from '../../data/store';

  export let title = '';
  export let image = '';
  export let description = '';
  export let link = '';
</script>

<article class={Card({ isDark: $isDark, css: { maxWidth: '290px', width: '100%' } })}>
  <div class="card-media">
    <img src={image} alt={`Image ${title}`} />
  </div>
  <div class="card-header">
    <h6 class="headline6">{title}</h6>
  </div>
  <div class="card-body">
    <p class="body2">{description}</p>
  </div>
  <div class="card-bottom">
    <button class={ButtonText({ isDark: $isDark })} on:click={() => window.open(link, '_blank')}>open</button>
  </div>
</article>

<style>
  article {
    margin: 10px;
  }
  article img {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    height: 163px;
    width: 290px;
  }

  article .card-body p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 260px;
  }
</style>
