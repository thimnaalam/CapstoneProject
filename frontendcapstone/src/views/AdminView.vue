<template>
    <div class="Admin">
        <div class="row" >
            <!-- <img class="container-fluid" src="../assets/admin.jpeg" id="adminImg" alt="adminImg"> -->
            <div>
                <h2 class="display-2 text-white" id="heading">Admin</h2>
            </div>
            
            <h2 class="display-5 text-dark">Users</h2>
        <table class=" container">
            <thead class="text-dark bg-success">
            <tr>
                <th>User ID</th>
                <th>Firstname</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Type</th>
                <th>Department</th>
                <th>Action</th>
               
            </tr>
        </thead>
        <tbody >

          <tr v-for="user in users" :key="user.id">
            <td>{{ user.userID }}</td>
            <td>{{ user.Firstname }}</td>
            <td>{{ user.Surname }}</td>
            <td>{{ user.Type }}</td>
            <td>{{ user.Department }}</td>
            <td>{{ user.Email }}</td>
           
            <td>
              <div class="row1">
                <button class="btn2  " @click="editUser(users)">Edit</button>
                <button class="btn2 " @click="deleteUser(users.userID)">Delete</button>
                <button class="btn2 " @click="addUser(users.userID)">add</button>
              </div>
            </td>
          </tr>
        </tbody>
        </table>

     <h2 class="display-5 text-dark  ">Products</h2>
     <table class="container ">
            <tr class="bg-success text-dark">
              <th>Product ID</th>
                <th>Image</th>
                <th>Type</th>   
                <th>Category</th>
                <th>Description</th>
                <th>Action</th>
               
            </tr>
            <tbody v-if="products">
              <tr v-for="product in products" :key="product.prodID">
                <td><img :src="product.prodUrl" style="height: 100px;" /></td> 
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodImage }}</td>
                <td>{{ product.Type }}</td>
                <td>{{ product.Category }}</td>
                <td> R {{ product.Description }}</td>
                <td>
                    <div class="row1">
                <button class="btn2 " @click="editproduct(products)">Edit</button>
                <button class="btn2 " @click="deleteproduct(products.productID)">Delete</button>
                <button class="btn2 " @click="addproduct(products.productID)">add</button>
              </div>
                </td>
              </tr>
            </tbody>
        </table>
     </div>
        </div>

</template>

  
<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
h2{
    padding-bottom: 5%;
    padding-top: 5%;
    top:20%;
}
.display-5{
    padding-top: 1%;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #F2F2F2;
  }
  .container{
    width: 90%;
    margin-bottom: 10%;
  }
  .btn2{
    width: 100px;
  }

</style>