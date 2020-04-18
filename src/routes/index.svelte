<script>
  import Container from '../components/Container.svelte';
  import Wrapper from '../components/Wrapper.svelte';
  import Card from '../components/Card.svelte';
  import Button from '../components/Button.svelte';

  import { colors, night } from '../stores/theme';

  import { writable } from 'svelte/store';

  let title = writable("Welcome to the tutorial");

  function changeTitle(){
    title.set($title + "!");
  }

  // 1. 

  function toggleNight(){
    night.set(!$night)
  }

</script>

<style lang='scss'>
  @import '../components/GlobalStyle/theme.scss';

  header{
    text-align: center;
  }

  section{
    margin: 2em 0;
    display: flex;
    justify-content: space-between;
  }

  .third{
    width: 30%;
  }

  h1{
    font-size: 2em;
  }

  .button{
    width: 100%;
    display: block;
    padding: 0.5em 0;
    text-align: center;
  }

</style>

<Wrapper>
  <Container>
    <header>
      <Card>
        <h1>{$title}</h1>
      </Card>
    </header>
    <section>
      <div class="third">
        <Card>
          <Button href='/community'>
            Community
          </Button>
        </Card>
      </div>
      <div class="third">
        <Card>
          <Button on:click={changeTitle}>
            Change Title
          </Button>
        </Card>
      </div>
      <div class="third">
        <Card>
          <Button on:click={toggleNight}>
            {#if $night}
              Day
            {:else}
              Night
            {/if}
          </Button>
        </Card>
      </div>
    </section>
  </Container>
</Wrapper>