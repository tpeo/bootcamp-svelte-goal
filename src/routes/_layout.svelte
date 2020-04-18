<script>
  import Background from '../components/Background.svelte'
</script>

<style lang="scss" global>
  @import "../components/GlobalStyle/global.scss";
  
</style>

<Background />
<main aria-label="Content">
  <slot />
</main>
