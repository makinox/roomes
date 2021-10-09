<script lang="ts">
  import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from 'fontawesome-svelte';
  import { ButtonText } from '@makinox/makinox-ui';

  import { isDark } from '../../data/store';
</script>

<section class="flex justify-center">
  <div class="flex justify-between">
    <button class={ButtonText({ isDark: $isDark })}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
    <button class={ButtonText({ isDark: $isDark })}> <FontAwesomeIcon icon={faArrowRight} /> </button>
  </div>
</section>

<style>
  section {
    padding-bottom: 100px;
  }
  section div {
    background-color: rgba(var(--light-background), 0.1);
    box-shadow: rgb(0 0 0 / 3%) 3px 3px 10px 3px;
    backdrop-filter: blur(2px);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 200px;
  }

  section div button {
    margin: 10px;
  }
</style>
