<template>
    <div class="Dailyfeed">
      <div class="row">
        <!-- <img src="../assets/about.webp" id="dailyfeed" alt="dailyfeedImg"> -->
        <div>
          <h2 class="display-2" id="dailyfeed1">DailyFeed</h2>
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

<style scoped>

</style>