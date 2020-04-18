import { writable, derived } from "svelte/store";

export let users = writable([
  {
    name: "Marshall Brandt",
    email: "marshall@utexas.edu",
    color: "#13f"
  },
  {
    name: "Jonathan Wong",
    email: "jwong@utexas.edu",
    color: "#4A8"
  }
])