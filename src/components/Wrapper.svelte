<script>
  import { fade } from 'svelte/transition';
  import { colors } from '../stores/theme';
  export let id;
  export let top;
  export let fixed;
  export let style;
</script>

<style lang="scss">
  div{
    position: absolute;
    top: 4em;
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &.top{
      display: block;
    }

    &.fixed{
      position: fixed;
      top: 4em;
      left: 0;
      right: 0;
      bottom: 0;
      min-height: unset;
    }
  }
</style>

<div style="{style}; color: {$colors.foreground}" in:fade={{duration: 200, delay: 50}} out:fade={{duration: 100}} {id} class:fixed class:top> <slot /> </div>