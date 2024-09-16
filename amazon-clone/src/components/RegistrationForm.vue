<template>
    <form @submit.prevent="toRegister" class="custom-form">
       <div class="mb-3">
        <label for="firstName" class="form-label">FirstName:</label>
   <input type="text" class="form-control" id="firstName" v-model="user.firstName" required>
</div>
<div class="mb-3">
        <label for="lastName" class="form-label">LastName:</label>
   <input type="text" class="form-control" id="lasName" v-model="user.lasName" >
</div>
<div class="mb-3">
        <label for="Email" class="form-label">Email:</label>
   <input type="email" class="form-control" id="email" v-model="user.email" required>
<p v-if="emailError" class="text-danger">{{ emailError }}</p>
</div>
<div class="mb-3">
        <label for="mobileNum" class="form-label">Mobile No.:</label>
   <input type="number" class="form-control" id="mobileInput" v-model="user.mobileNum" required>
   <p class="text-danger"> {{ mobileError }}</p>
</div>
<div class="mb-3">
        <label for="password" class="form-label">Password:</label>
   <input type="password" class="form-control" id="password" v-model="user.password">
</div>
<div class="mb-3">
      <button type="submit" class="btn btn-dark">Submit</button>
      <button type="button" class="btn btn-dark" @click="$router.push('/login')">Login</button>
    </div>

</form>
  
</template>

<script>
export default {
    data(){
        return{
    user:{
        firstName:'',
        lastName:'',
        email:'',
        mobileNum:'',
        role:'',
        password:''
    },
    mobileError:'',
    emailError:''
}
},
methods:{
    validateMobileNumber(mobileNum){
        const regex=/^\d{10}$/;
        return regex.test(mobileNum);
    },
    validateEmail(email){
        const regex=/^[^@]+@[^@]+\.[^@]+$/;
        return regex.test(email);
    },
    async toRegister(){
        this.mobileNum='';
        this.emailError='';

        if(!this.validateEmail(this.user.email)){
            this.emailError='Use proper email format';
            return;
        }

        if(!this.validateMobileNumber(this.user.mobileNum)){
            this.mobileError='Mobile Number should be 10 digits';
            return;
        }

        const formData=new FormData();

        Object.keys(this.user).forEach(key=>{
            formData.append(key,this.user[key]);
        });

       

    }


}

}
</script>

<style scoped>


.custom-form {
  border: 1px solid #ddd;
  border-radius: 10px;
  max-width: 600px; /* Adjust max-width as needed */
  margin: auto; /* Center the form horizontally */
  padding: 20px;
  background-color: #f9f9f9;
}

.custom-form .btn {
  margin-right: 10px; /* Add spacing between buttons */
}

@media (max-width: 576px) {
  .custom-form {
    max-width: 100%; /* Full width on small screens */
    margin: 10px; /* Adjust margin for smaller screens */
  }
}

.text-danger {
  color: red; /* Style for error messages */
}

</style>