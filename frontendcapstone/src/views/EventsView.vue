<template>
    <div class="Events">
      <div class="row">
        <img src="../assets/visuals-000002475045-OIeHa0-original.jpg" id="eventsImg" alt="eventsImg">
        <div>
          <h2 class="display-2" id="Events1">Events</h2>
        </div>
      </div>
      <div v-if="events">
        <div class="row" v-for="event in events" :key="event.EventID">
          <p>{{event.EventID}} - {{ event.Title  }}</p>
  
        </div>
      </div>
      <div v-else>
        <Spinner/>
      </div>
   <div>
    <h2 @click="scrollTo('upcomingEvents')">Upcoming Events</h2>
    <h2 @click="scrollTo('pastEvents')">Past Events</h2>

    <!-- Filter buttons -->
    <div>
      <button @click="showUpcoming = true">Show Upcoming</button>
      <button @click="showUpcoming = false">Show Past</button>
    </div>

    <!-- Upcoming Events Section -->
    <div id="upcomingEvents">
      <h3>Upcoming Events</h3>
      <div v-if="showUpcoming">
        <div v-for="event in upcomingEvents" :key="event.id" class="event-card">
          <!-- Display event details here -->
          <div>{{ event.Title }}</div>
          <div>{{ event.Dates }}</div>
        </div>
      </div>
    </div>

    <!-- Past Events Section -->
    <div id="pastEvents">
      <h3>Past Events</h3>
      <div v-if="!showUpcoming">
        <div v-for="event in pastEvents" :key="event.id" class="event-card">
          <!-- Display event details here -->
          <div>{{ event.Title }}</div>
          <div>{{ event.Dates }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    Spinner
  },
  data() {
    return {
      showUpcoming: true, 
      upcomingEvents: [], 
      pastEvents: [] 
    };
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  },
  methods: {
   
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    },
    
    fetchEvents() {
     
    }
  },
  mounted() {
 
    this.$store.dispatch('fetchEvents')
  }
};
</script>

<style scoped>
  #Events1{
  position: absolute;
  top: 20%;
  left:10%;
  color: white;
  font-style: italic;
}

/* .event-card {

} */
</style>
