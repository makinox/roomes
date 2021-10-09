<script lang="ts">
  import './css/colors.css';
  import '@makinox/makinox-ui/dist/index.css';

  import ListContainer from './components/ListContainer/ListContainer.svelte';
  // import PageActions from './components/PageActions/PageActions.svelte';
  import Hero from './components/Hero/Hero.svelte';
  import Nav from './components/Nav/Nav.svelte';
  import { isDark } from './data/store';

  let Theme;

  isDark.subscribe(async (value) => {
    if (value) {
      console.log('lig');
      Theme = (await import('./components/ThemeManager/DarkTheme.svelte')).default;
    } else {
      console.log('dark');
      Theme = (await import('./components/ThemeManager/LightTheme.svelte')).default;
    }
  });
</script>

<Nav />
<Hero />
<ListContainer />
<svelte:component this={Theme} />
<!-- <PageActions /> -->
