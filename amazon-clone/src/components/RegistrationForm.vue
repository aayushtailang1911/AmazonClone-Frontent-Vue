<template>
    
    <form @submit.prevent="toRegister" class="custom-form">
        <img class="i1" :src="require('@/assets/amazon.png')" alt="Logo" />
       
       <div class="mb-3">
        <label for="firstName" class="form-label">First Name:</label>
   <input type="text" class="form-control" id="firstName" v-model="user.firstName" required>
</div>
<div class="mb-3">
        <label for="lastName" class="form-label">Last Name:</label>
   <input type="text" class="form-control" id="lasName" v-model="user.lastName" >
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
    <label for="Gender" class="form-label"> Gender:</label><br>
   <label> <input type="radio" class="form-label" name="gender" value="male" v-model="user.gender">Male</label> &nbsp; &nbsp;
   <label> <input type="radio" class="form-label" name="gender" value="female" v-model="user.gender">Female</label>
</div>
<div class="mb-3">
      <button type="submit" class="btn btn-dark">Submit</button>
      <button type="button" class="btn btn-dark" @click="$router.push('/login')">Login</button>
    </div>

</form>
  
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
    user:{
        firstName:'',
        lastName:'',
        email:'',
        mobileNum:'',
        role:'',
        password:'',
        gender:''
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
    this.mobileError = '';
    this.emailError = '';

    if (!this.validateEmail(this.user.email)) {
        this.emailError = 'Use proper email format';
        return;
    }

    if (!this.validateMobileNumber(this.user.mobileNum)) {
        this.mobileError = 'Mobile Number should be 10 digits';
        return;
    }

    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        //     method: 'POST',
        //     body: JSON.stringify(this.user),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        // const data = await response.json();
        // console.log('Registration successful:', data);
        // alert('Registration successful!');
        const resp= await axios.post('https://jsonplaceholder.typicode.com/users',this.user,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log('Registration Successful:',resp.data);
        alert('Resgistration Successful');
        

    } catch (error) {
        console.error('Error during registration:', error);
        alert('Failed to register');
    }
}

}

}
</script>

<style scoped>
.i1 {
  display: block;
  margin: 0 auto 20px; /* Center image and add bottom margin */
  max-width: 100px; /* Adjust the size as needed */
}

.custom-form {
  border: 1px solid #ddd;
  border-radius: 10px;
  max-width: 600px; /* Adjust max-width as needed */
  margin: auto; /* Center the form horizontally */
  padding: 20px;
  background-color: #f9f9f9;
}

.custom-form .btn {
  margin-right: 10px;
  color: beige; /* Add spacing between buttons */
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