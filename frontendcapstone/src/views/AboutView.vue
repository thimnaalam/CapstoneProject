<template>
  <div class="Aboutpage">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/sli2.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/Sli1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/Sli3.webp" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
    <h2 class="text-white">About</h2>
    <div class="flex-container">
      <!-- Image on the left -->
      <div class="image-container">
        <img class="img-fluid" loading="lazy" src="../assets/image.webp" alt="Your Image">
      </div>

      <!-- Paragraphs on the right -->
      <div class="paragraph-container">
        <p class="container">
          Radio Khaltsha is by youth for youth.Number one youth radio station in Western Cape, based in Cape Town, Khayelitsha, the second biggest township in South Africa. Radio Khaltsha is owned by Yes Media House (Pty) Ltd in Khayelitsha.This initiative is by youth for youth. This radio station exist because of you (artists), to express yourself in an artistic way, we believe that every artist has his/her way of communicating to the world.The studio is being taken care by Yes Media House. One of our goals is to empower young people out there, especial the local artist around cape town.We encourage people with positive spirit in action, offering effective and affordable opportunities to turn the world around by initially building 'youth of South Africa' and strong personal growth
        </p>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {

};
</script>

<style scoped>
img{
  height:500px;
  object-fit: cover;
}
h2{
  position: absolute;
  top: 40%;
  left:80%;
  font-size: 60px;
  font-style: italic;
  font-weight: 200;

}
.Aboutpage{
  margin-bottom: 1000px;
}
</style>
