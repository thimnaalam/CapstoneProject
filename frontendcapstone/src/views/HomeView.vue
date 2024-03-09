<template>
  <div class="background-video">
    <video autoplay loop muted>
      <source src="../assets/onair.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="content">
     Radio Khaltsha
    </div>
  </div>
</template>

<style scoped>
.background-video {
  position: absolute;
  top: 20%;
  left: 30%;
  width: 1000px;
  height: 5000px;
  /* overflow: hidden; */
  z-index: -1;
   object-fit: cover;
 

}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 2000px;
  height: 100%;
  object-fit: cover;
}

.content {

  position: relative; 
  z-index: 1; 
  color: black;

}
</style>

