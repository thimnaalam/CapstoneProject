<template>
    <div class="Contact">
<div class="row">
    <img src="../assets/contact.jpg" id="aboutImg" alt="aboutImg"> 
    <h2 class="display-2">Connect with us</h2>
</div>
    </div>
    <div class="container my-5" id="form">
      <div class="row">
        
        <div class="col-md-6 mx-auto">
          <form action="https://formspree.io/f/mrgwrqzo" method="post">
            <div class="mb-3">
              <label for="FirstName" class="form-label"></label>
              <input type="text" class="form-control" name="Fullname" id="FirstName" placeholder="Fullname" required>
            </div>
            <div class="mb-3">
              <label for="Surname" class="form-label"></label>
              <input type="text" class="form-control" name="Surname" id="Surname" placeholder="Surname">
            </div>
            <div class="mb-3">
              <label for="Email" class="form-label"></label>
              <input type="email" class="form-control" name="Email" id="Email" placeholder="Email" required>
            </div>
            <div class="mb-3">
              <label for="Message" class="form-label"></label>
              <textarea class="form-control" id="Message" name="Message" rows="3" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-dark">Submit</button>
          </form>

          <div class="align-items-center" id="location">
              <i class="bi bi-geo-alt text-white"></i> 93 Phakamani Rd, Khayelitsha, Cape Town, 7784
              <a href="https://maps.app.goo.gl/M8tKYkqeECBCWwLU9"  class=" mx-2"></a> 
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .form {
   
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  } 
  .Contact{
object-fit: cover;

  }
  h2{
    position: absolute;
    bottom: 70%;
    left:30%; 
    color: white;  
    font-style: italic;
  }
  .container{
   background-color: rgba(0, 0, 0, 0.132);
   position: absolute;
   bottom: 5%;
   
  }
  .btn{
    position: absolute;
    left: 45%;
    width:100px;
  }
  #location{
  position: absolute;
  left: 78%;
  bottom: 50%;
  color: white;
  font-size: large;
  }
 
  
  </style>