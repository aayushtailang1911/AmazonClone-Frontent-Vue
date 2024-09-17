<template>
    <section>
        <div class="container">
            <img src="" alt="" id="logo">
            <div class="box">
                <h1>Sign In</h1>
                <form action="">
                    <label for="email">Email or Mobile number</label>
                    <input type="text" id="email" v-model="email" required>

                    <label for="password">Password</label>
                    <input type="password" name="" id="password" v-model="password" required>

                    <button type="submit">Sign In</button>

                    <div class="additional">
                        <a href="#" class="forgot-password">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    data(){
        return{
            email:'',
            password:'',
            emailError:''
        }
    },
    methods:{
        validateEmail(email){
        const regex=/^[^@]+@[^@]+\.[^@]+$/;
        return regex.test(email);
    },
    async toLogin(){
        if(!this.validateEmail(this.email)){
            this.emailError='Use proper email format';
            return;
        }

        const formData = new FormData();

        formData.append('email', this.email);
        formData.append('password', this.password);

        //send http request
    }
    }
}
</script>

<style scoped>

.container{
    display: flex;
    align-content: center;
    justify-content: center;
}
.box{
    width: 360px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    align-items: center;
    justify-content: center

}
.box h1{
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}
form {
  display: flex;
  flex-direction: column;
}
form label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333; 
}
form input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
form button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #f0c14b; 
  border-color: #a88734 #9c7e31 #846a29;;
  color: black;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}
form button:hover {
  background-color: #e59400; 
}
.additional {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.forgot-password:hover {
  text-decoration: underline;
}

</style>