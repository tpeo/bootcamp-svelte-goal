<script>
  import {colors} from '../stores/theme';
  export let href;

  $: style = `
    background-color: ${$colors.foreground};
    color: ${$colors.background};
  `;
</script>

<style>
  a,button{
    width: 100%;
    display: block;
    padding: 0.75em 0;
    border-radius: 0.5em;
    text-align: center;
    cursor: pointer;
  }
</style>
{#if href}
  <a {style} {href}>
    <slot />
  </a>
{:else}
  <button type="button" {style} on:click>
    <slot />
  </button>
{/if}