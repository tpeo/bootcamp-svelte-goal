<script>
  import TextInput from './TextInput.svelte';
  import Card from './Card.svelte';
  import Button from './Button.svelte';
  import { writable } from 'svelte/store';
  import { colors } from '../stores/theme';
  import { users } from '../stores/users';

  // Values of our form
  let name = writable("");
  let nameErrors = writable([]);
  let email = writable("");
  let emailErrors = writable([]);
  let color = writable("");
  let colorErrors = writable([]);


  let loading = writable(false);

  function validateForm(){
    // Assume validity
    let isValid = true
    // Reset error messages
    nameErrors.set([])
    emailErrors.set([])
    colorErrors.set([])

    //Name is required
    if($name.length == 0){
      nameErrors.set(['Name must not be empty!'])
      isValid = false
    }
    //Email is required
    if($email.length == 0){
      emailErrors.set(['Email must not be empty!'])
      isValid = false
    }
    //Email must be @utexas.edu
    if($email.indexOf('@utexas.edu') === -1){
      emailErrors.update((e) => e.concat('Email must be a UTEXAS email'));
      isValid = false;
    }
    //Color must be length 3
    if($color.length != 3){
      colorErrors.set(["Color must be a 3-character Hex code"]);
      isValid = false;
    }
    return isValid;
  }

  function tryToSubmit(){
    if(validateForm()){
      mockSubmitServer({
        name: $name,
        email: $email,
        color: '#' + $color
      })
    }
    else{
      console.log("ERROR");
    }
  }

  function mockSubmitServer(user){
    loading.set(true)
    setTimeout(() => {
      loading.set(false);
      name.set("");
      email.set("");
      color.set("");
      users.update((u) => u.concat(user))
    }, 2000)
  }
  
</script>

<style lang="scss">

  p{
    padding: 1em 0;
  }
</style>

<Card>
  <h3 class="h3">
    Join the community
  </h3>
  <p class="p">
    Connect with like-minded students, access our live classes, and receive emails for upcoming events and opportunities.
  </p>
  <form>
    <TextInput label="Name" bind:value={$name} errors={$nameErrors} />
    <TextInput label="Email" bind:value={$email} errors={$emailErrors} />
    <TextInput label="Favorite Color" bind:value={$color} errors={$colorErrors} />
    <Button on:click={tryToSubmit}>
      {$loading ? 'Loading' : 'Add'} 
    </Button>
  </form>
</Card>