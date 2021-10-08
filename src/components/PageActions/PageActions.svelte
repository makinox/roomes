<script lang="ts">
  import { ButtonOutline } from '@makinox/makinox-ui';
</script>

<section class="flex justify-center">
  <div class="flex justify-between">
    <button class={ButtonOutline()}>Le</button>
    <button class={ButtonOutline()}>Rig</button>
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
