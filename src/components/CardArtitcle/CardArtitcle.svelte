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
    <button class={ButtonText({ isDark })} onClick={() => window.open(link, '_blank')}>open</button>
  </div>
</article>

<style>
  article {
    margin: 10px;
  }
  article img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
</style>
