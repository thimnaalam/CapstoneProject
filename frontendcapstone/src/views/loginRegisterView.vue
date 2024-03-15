<template>
    <body>
        <img src="../assets/contactback.jpg" id="loginR" alt="loginRImg">
  <div class="container-login">
    <h2>Login</h2>
   <form id="LoginForm">
    <input type="Email" placeholder="Email" id="Email" required>
    <input type="Password" placeholder="Password" id="Password" required>
    <button type="submit">Login</button>
   </form>
     <p>Don't have an account? <a href="register.html"></a>Register here</p>
  </div>
   <h1 class="text-center">OR</h1>
  <div class="container-register">
    <h2>Register</h2>
   <form id="RegisterForm">
    <input type="Firstname" placeholder="Firstname" id="Firstname" required>
    <input type="Lastname" placeholder="Lastname" id="Lastname" required>
    <input type="Email" placeholder="Email" id="Email" required>
    <input type="Password" placeholder="Password" id="Password" required>
    <input type="ConfirmPassword" placeholder="ConfirmPassword" id="ConfirmPassword" required>
    <button type="submit">Register</button>
   </form>
    <p>Already have an account? <a href="Login.html"></a>Login here</p>
  </div>
   
</body>    
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
body, h2, form, input, button, p, a{
    margin: 0;
    padding: 0;
}
body{
    font-family: Arial, sans-serif;
    margin-bottom: 6.5%;
  
}
.container-login, .container-register{
    position: absolute;
    width: 300px;
    padding: 20px;
    border: 1px solid rgb(202, 7, 7);
    border-radius: 5px;
    background-color:  rgba(6, 6, 6, 0.26);  
    top:40%

}
h2{
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: white;
}
h1{
    position: absolute;
    left:46%;
    top:60%;
    color: white;
}
form{
    display: flex;
    flex-direction: column;
}
input{
    margin-bottom: 15px;
    padding: 10px;
    border:1px solid rgb(206, 4, 4);
    border-radius: 3px;
}
input[type="submit"]{
    padding: 10px 15px;
    border:none;
    border-radius: 3px;
    background-color: rgb(1, 42, 1);
    color: white;
    cursor: pointer;

}
input[type="submit"]:hover{
  background-color: rgb(179, 105, 3) ;
}
p{
    margin: 15px;
    text-decoration: underline;
    color: white;
}
a{
    color:  rgb(1, 42, 1);
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
.container-register{
    position: absolute;
    bottom:10%;
    left:60%;
    height:500px;
    top:200px
   
    
}
.container-login{
    position: absolute;
    bottom:20%;
    left:20%
}
img{
    object-fit: contain;
    width: 100%;
    height: 100%;
}


</style>