<template>
    <nav class="container-fluid navbar navbar-expand-lg custom-navbar bg-dark  " id="navbar">
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
      </button>
      <RouterLink to="/">
  <img class="img-fluid" loading="lazy" src="../assets/Radio-Khaltsha-Logo-512x-512-px-photoaidcom-cropped.png" alt="logo" id="logo">
 </RouterLink>
     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <RouterLink to="/" class="nav-link active text-white">
             Home  |
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/about" class="nav-link active text-white ">
                 About |
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/dailyFeed" class="nav-link active text-white">
                DailyFeed |
           </RouterLink>
         </li>

         <li class="nav-item">
             <RouterLink to="/Podcast" class="nav-link active text-white">
                Podcast |
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/events" class="nav-link active text-white">
                Events |
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/contact" class="nav-link active text-white">
                 Contact
           </RouterLink>
         </li>
       </ul>  
     </div>
   </div>
 </nav> 
 
 </template>
 
 <script>
     export default {
         name:'NavBarComp',
     }
 </script> 
 
 <style scoped>
 #logo{
    width: 10%;
    height: 10%;
 }
/* .nav-item{
  font-size: xx-large;
} */
 </style>