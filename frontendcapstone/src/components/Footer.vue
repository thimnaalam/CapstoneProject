<template>
    <div class="container-fluid fixed-bottom text-white bg-black" id="Footer">
        <Live></Live>

        <div class="colomn" id="icon">
            Follow us :
     <a href="https://www.instagram.com/radio_khaltsha/?hl=en" class="text-white mx-2"><i class="bi bi-instagram"></i></a>
        <a href="https://www.tiktok.com/@radio_khaltsha97.1" class="text-white mx-2"><i class="bi bi-tiktok"></i></a>
        <a href="https://www.facebook.com/radiokhaltsha97.1fm/" class="text-white mx-2"><i class="bi bi-facebook"></i></a> 
        
           <div class="text-center ">
            <p class="lead">
                Radio_Khaltsha &copy;
                <span>{{ currYear }}</span>
            </p>
              </div>
     </div>
     <div id="app">
        <!-- <button @click="toggleChatBox">Open Chat</button> -->
        <p class="content">Chat with us:</p>
    
      <chat-box :visible="showChatBox"></chat-box>
    
  </div>
   
       </div>
</template>

<script>
import Live from '../components/Live.vue';
import chatBox from '../components/chatBox.vue';
    export default {
         name:'FooterComp',
        data(){
            return{
                currYear: new Date().getFullYear()
            } 
        },
components: {
    chatBox,
    Live
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
        
    }
</script>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
.content{
    position: absolute;
    left: 90%;
    bottom: 20%;
}
#icon{
    margin-top: 2%;
}

</style>