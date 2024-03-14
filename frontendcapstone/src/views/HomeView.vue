<template>
  <div class="Home">
    <div class="row">
      <img src="../assets/on-air.webp" id="HomePic" alt="Home Image">
      <div>
        <h2 class="display-5 text-white" id="Radio">Radio</h2>
      </div>
      <div>
        <h1 class="display-1 text-white" id="Khaltsha">Khaltsha</h1>
      </div>
      <div>
        <h1 class="display-1 text-white" id="Fm">97.1</h1>
      </div>
    </div>
    <!-- cards -->
    <div class="row row-cols-1 row-cols-md-3 g-4" id="cards">
      <div class="col">
    <div class="card h-100">
      <img src="../assets/image.webp" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Our community</h5>
        <p class="card-text">Let us introduction you to the people whho make this happen for you on a daily bases. Meet team.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="../assets/talk.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Join the conversation</h5>
        <p class="card-text">Engage with us on our daily feed as we update you on current affairs</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="../assets/pod.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Catch up</h5>
        <p class="card-text">Catch up with the conversations we've had and do not miss a day with us.</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
#Radio{
position: absolute;
bottom: 50%;
right: 20%;
font-weight: lighter;
}
#Khaltsha{
position: absolute;
bottom: 40%;
right: 20%;
font-weight: 500;
}
#Fm{
position: absolute;
bottom: 30%;
right: 20%;

}
.card{
  top:10%;
  
}
.Home{
  margin-bottom: 20%;
}

</style>