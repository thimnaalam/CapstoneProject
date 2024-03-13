<template>
    <div class="Events">
      <div class="row">
        <!-- <img src="../assets/about.webp" id="eventsImg" alt="eventsImg"> -->
        <div>
          <h2 class="display-2" id="Events1">Events</h2>
        </div>
      </div>
        <div class="row" >
        <Spinner />
      </div> 
    </div>
  </template>


<script>
import { Spinner } from "../components/Spinner.vue";
export default {
  components: {
    Spinner
   
  }
}
</script>