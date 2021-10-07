<script lang="ts">
  import './css/colors.css';
  import '@makinox/makinox-ui/dist/index.css';
  import Navbar from './components/navbar/navbar.svelte';
  export let name = 'world';
</script>

<Navbar />

<h1>Hello {name}!</h1>

<style>
  h1 {
    text-align: center;
  }
</style>
