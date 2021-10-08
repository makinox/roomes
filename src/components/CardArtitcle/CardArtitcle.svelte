<script>
  import { Card } from '@makinox/makinox-ui';

  import { isDark } from '../../data/store';

  export let title = 'pan';
</script>

<article class={Card({ isDark: $isDark, css: { maxWidth: '290px', width: '100%' } })}>
  <div class="card-header">
    <h6>{title}</h6>
    <span class="subtitle1">secondary</span>
  </div>
  <div class="card-body">
    <p class="body2">text</p>
  </div>
</article>

<style>
  article {
    margin: 10px;
  }
</style>
