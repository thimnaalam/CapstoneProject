<template>
  <div>
    <h1>Podcast</h1>
    <ul>
      <li v-for="product in products" :key="product.ProdID">
        {{ product.ProdType }} - {{ product.Catorgory }} - {{ product.Descriptions }}
      </li>
    </ul>
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

</style>
