import { writable, derived } from "svelte/store";

// create new store with initial value of 'false'
export let night = writable(false);
// we can subscribe to night's value using $night
// we can set night using night.set(newValue)

// create a derived store that updates every time night updates
export let colors = derived(night, ($night) => {
  if($night){
    return {
      background: '#224',
      foreground: '#ddf'
    }
  } else {
    return {
      background: '#eef',
      foreground: '#224'
    }
  }
})