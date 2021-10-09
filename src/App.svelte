<script lang="ts">
  import './css/colors.css';
  import '@makinox/makinox-ui/dist/index.css';

  import ListContainer from './components/ListContainer/ListContainer.svelte';
  import ThemeManager from './components/ThemeManager/ThemeManager.svelte';
  import Hero from './components/Hero/Hero.svelte';
  import Nav from './components/Nav/Nav.svelte';
</script>

<ThemeManager>
  <Nav />
  <Hero />
  <ListContainer />
</ThemeManager>
