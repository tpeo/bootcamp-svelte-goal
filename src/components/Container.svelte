<script>
  export let small;
</script>

<style lang="scss">
  @import "./GlobalStyle/theme.scss";
  div {
    width: 94%;
    box-sizing: border-box;
    max-width: 60em;
    margin: auto;
    position: relative;
    @include breakpoint("l") {
      max-width: 70em;
    }
    @include breakpoint("xl") {
      max-width: 80em;
    }
  }

  .small{
    max-width: 40em;
    @include breakpoint("l") {
      max-width: 50em;
    }
  }
</style>

<div class:small>
  <slot />
</div>
