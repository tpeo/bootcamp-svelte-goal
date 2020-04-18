<script>
  import Container from '../../components/Container.svelte';
  import Wrapper from '../../components/Wrapper.svelte';
  import JoinCard from '../../components/JoinCard.svelte';
  import Table from '../../components/Table.svelte';
  import { users } from '../../stores/users';

  function clickRow(){
    console.log("Row Clicked!");
  }

  $: peopleRows = $users.map(({name, email, color}) => {
    return {
      id: name,
      attributes: [
        {
          title: "Name",
          value: name
        },
        {
          title: "Email",
          value: email
        },
        {
          title: "Color",
          value: color,
          type: 'color'
        }
      ]
    }
  });

</script>

<style lang='scss'>
  @import '../../components/GlobalStyle/theme.scss';
  section{
    margin: 2em 0;
  }
</style>

<Wrapper top>
  <section>
    <Container>
      <JoinCard />
    </Container>
  </section>
  <section> 
    <Container>
      <Table caption="Members of TPEO community" items={peopleRows} on:rowClick={clickRow} />
    </Container>
  </section>
</Wrapper>