<template>
    <div class="Events">
      <div class="row">
        <img src="../assets/visuals-000002475045-OIeHa0-original.jpg" id="eventsImg" alt="eventsImg">
        <div>
          <h2 class="display-2" id="Events1">Events</h2>
        </div>
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
export default {
  data() {
    return {
      showUpcoming: true, // Indicates whether to show upcoming events or past events
      upcomingEvents: [], // Array to hold upcoming events data
      pastEvents: [] // Array to hold past events data
    };
  },
  methods: {
    // Method to scroll to a specific section using element ID
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    },
    // Method to fetch events data (you can replace this with your actual API call)
    fetchEvents() {
      // Assume you have a method to fetch events data from your backend
      // and update the upcomingEvents and pastEvents arrays accordingly
    }
  },
  mounted() {
    // Fetch events data when the component is mounted
    this.fetchEvents();
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
/* Add your styles for event cards and other elements here */
.event-card {
  /* Styles for event cards */
}
</style>
