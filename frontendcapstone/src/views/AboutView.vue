<template>
  <div class="Aboutpage">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/Khayelitsha_queer_community_01.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/khayelitsha-wall-mural-breeze-yoko-cape-town-34c75cd74a03.avif" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/resize.webp" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
    <h2 class="text-black">About</h2>   
    <div class="flex-container">
      <div class="title">  
        <h3 class="text-black" id="sub1">Who are we?</h3>
      </div>
      <!-- Image on the left -->
      <div class="image-container">
        <img class="img-fluid" loading="lazy" src="../assets/image.webp" alt=" Image">
      </div>

      <!-- Paragraphs on the right -->
      <div class="paragraph-container">
        <p class="container text-black">
          Radio Khaltsha is by youth for youth.Number one youth radio station in Western Cape, based in Cape Town, Khayelitsha, the second biggest township in South Africa. Radio Khaltsha is owned by Yes Media House (Pty) Ltd in Khayelitsha.This initiative is by youth for youth. This radio station exist because of you (artists), to express yourself in an artistic way, we believe that every artist has his/her way of communicating to the world.The studio is being taken care by Yes Media House. One of our goals is to empower young people out there, especial the local artist around cape town.We encourage people with positive spirit in action, offering effective and affordable opportunities to turn the world around by initially building 'youth of South Africa' and strong personal growth
        </p>
      </div>
    </div>
    <h3 class="sub2 text-black">Meet the team</h3>
    <div class="flex-container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="../assets/download (1).jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Thalitha Sika</h5>
        <p class="card-text">Creative director</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../assets/download (2).jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Siyaxola Anganathi</h5>
        <p class="card-text">Sports Presenter</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../assets/download.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Calvin, Momo, Nkosi</h5>
        <p class="card-text">Sound engineering team</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../assets/images (1).jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">King Zweli</h5>
        <p class="card-text">Station director</p>
      </div>
    </div>
  </div>
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

#sub1{
  position: absolute;
  top:90%;
  left:45%;
 
  
}
.Aboutpage{
  margin-bottom: 1000px;
}
.img-fluid{
width: 500px;
margin-top: 9%;
margin-left: 10%;
height: 400px;
margin-bottom: 5%;
}
.paragraph-container{
  position: absolute;
  width: 500px;
  left:55%;
  top:800px;
}
.sub2{
  position: absolute;
  left:45%;
  top: 1200px;

}
.flex-container{
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 7%;
}
.card{
width: 300px;
}

</style>
