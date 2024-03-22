<template>
    <div class="row">
      <img src="../assets/240_F_621103237_ncTpxl9XR40wlO00QBFzqGFu760Z7amk.jpg" id="PodPic" alt="Image">
      <div>
    <h1 class="text-white">Podcast</h1>
    <div class="button-row">
    <a class="btn btn-dark" href="#" role="button">Monday</a>
    <a class="btn btn-dark" href="#" role="button">Tuesday</a>
    <a class="btn btn-dark" href="#" role="button">Wednesday</a>
    <a class="btn btn-dark" href="#" role="button">Thursday</a>
    <a class="btn btn-dark" href="#" role="button">Friday</a>
    <a class="btn btn-dark" href="#" role="button">Saturday</a>
    <a class="btn btn-dark" href="#" role="button">Sunday</a>
  </div>
    <ul>
      <li v-for="product in products" :key="product.ProdID">
        {{ product.ProdType }} - {{ product.Catorgory }} - {{ product.Descriptions }}
      </li>
    </ul>
  </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8000/Products');
        this.products = response.data.results; 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>

<style scoped>
.button-row {
    display: flex;
    justify-content: center; 
    gap: 10px;
    margin-top: 7%; 
}
#PodPic{
  object-fit: cover;
  height:300px;
}
h1{
  position: absolute;
  top:30%;
  left:80%;
 font-size: 60px;
 font-weight: lighter;
 font-style: italic;

}

</style>
