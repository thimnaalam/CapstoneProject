<template>
  
  <main class="container-fluid">
    
   <Navbar></Navbar>
   <Footer></Footer>
   <router-view/>
   <spinner></spinner>


 </main>

</template> 




<script>
import Navbar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';

export default{
  components:{
    Navbar,
    Footer,
    Spinner,
  
  
   
  }
}

</script>
 

<style>

</style>
