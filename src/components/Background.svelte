<script>
  export let small;
  import { colors } from '../stores/theme';

  $: style = `
    background: ${$colors.background};
  `
</script>

<style lang="scss">
  @import "./GlobalStyle/theme.scss";
  div {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    transition: background-color 0.2s;
  }
</style>

<div {style}>
  <slot />
</div>
