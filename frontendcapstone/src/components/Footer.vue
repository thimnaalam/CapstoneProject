<template>
    <div class="container-fluid fixed-bottom text-white bg-black" id="Footer">
        <div class="colomn">
            Follow us :
     <a href="https://www.instagram.com/radio_khaltsha/?hl=en" class="text-white mx-2"><i class="bi bi-instagram"></i></a>
        <a href="https://www.tiktok.com/@andilehuman/video/7286395897758436614" class="text-white mx-2"><i class="bi bi-tiktok"></i></a>
        <a href="https://www.facebook.com/radiokhaltsha97.1fm/" class="text-white mx-2"><i class="bi bi-facebook"></i></a> 
        
           <div class="text-center ">
            <p class="lead">
                Radio_Khaltsha &copy;
                <span>{{ currYear }}</span>
            </p>
              </div>
     </div>
       </div>
</template>

<script>
    export default {
        name:'FooterComp',
        data(){
            return{
                currYear: new Date().getFullYear()
            }
        }
        
    }
</script>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
/* a{

 
} */
</style>