<script>
  export let items;
  export let caption;
  export let title;

  import { createEventDispatcher } from 'svelte'
  import { colors } from '../stores/theme';

  const dispatch = createEventDispatcher();

  function navigate(id){
    dispatch('rowClick', { id });
  }

</script>

<style lang="scss">
  @import './GlobalStyle/theme.scss';

  table {
    // table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    margin: 2em 0;
    overflow: hidden;
    border-radius: 0.5em;
    overflow: hidden;
  }
  thead{
    text-align: left;
  }
  td, th {
    padding: 1rem;
  }
  tbody tr {
    cursor: pointer;
  }
  caption{
    text-align: left;
    margin: 1em 0;
  }
</style>

{#if items && items.length > 0}
  <table>
    <caption class="invisible">{caption}</caption>
    <thead style="background-color: {$colors.foreground}; color: {$colors.background}">
      <tr>
        {#each items[0].attributes as {title }, col}
          <th scope="col" class="h4">{title}</th>
        {/each}
      </tr>
    </thead>
    <tbody  style="background-color: {$colors.background}; color: {$colors.foreground}">
      {#each items as {id, attributes}, row }
        <tr on:click={() => navigate(id)}>
          {#each attributes as {value, type}, col}
            <td>
              {#if type === 'color'}
                <span style="background-color: {value}">{value}</span>
              {:else}
                {value}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  Empty Table
{/if}