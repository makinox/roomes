<script lang="ts">
  import { ButtonOutline } from '@makinox/makinox-ui';

  import { isDark } from '../../data/store';
</script>

<section class="flex justify-center">
  <div class="flex justify-between">
    <button class={ButtonOutline({ isDark: $isDark })}>Le</button>
    <button class={ButtonOutline({ isDark: $isDark })}>Rig</button>
  </div>
</section>

<style>
  section div {
    border: 1px solid blue;
    width: 300px;
  }

  section div button {
    margin: 10px;
  }
</style>
