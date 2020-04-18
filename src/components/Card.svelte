<script>
  import {colors} from '../stores/theme';
</script>

<style>
  div{
    padding: 2em;
    /* Prevent border from adding width */
    border: 0.2em solid transparent;
    box-sizing: border-box;
    border-radius: 1em;
  }
</style>

<div style="background-color: {$colors.background}; color: {$colors.foreground}; border-color: {$colors.foreground}">
  <!--
    Slot allows you to pass elements inside of tags
    (<Card> {*inserted inside slot*} </Card>)
  -->
  <slot />
</div>