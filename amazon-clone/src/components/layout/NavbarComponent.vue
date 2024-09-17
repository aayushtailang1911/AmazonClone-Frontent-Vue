<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <div class="navbar-left-side  col-sm-6 col-lg-1">
          <img
          class="i1"
          src="../../assets/amazon-removebg-preview.png"
          alt="Logo"
        />
        <!-- toggle button for smaller screens -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex mx-auto w-100 justify-content-center">
          <form class="d-flex w-50" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div class="navbar-right-side">
        <ul class="navbar-nav me-auto col-lg-1">
            <!-- admin navbar -->
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto" v-if="isAdmin">
                <li class="nav-item dropdown me-4">
             <i class="fa-regular fa-user dropdown-toggle" data-bs-toggle="dropdown"></i>
            <ul class="dropdown-menu" id="drop1">
              <li><a class="dropdown-item" href="#">Show Users</a></li>
              <li><a class="dropdown-item" href="#">Show Products</a></li>
              <!-- <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            </ul>
          </li>
            </ul>
            <!-- user navbar -->
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto" v-if="isUser">
                <li class="nav-item me-3"><i class="fa-regular fa-heart"></i></li>
                <li class="nav-item me-3"><i class="fa-solid fa-cart-shopping"></i></li>
                <li class="nav-item me-3"><i class="fas fa-user"></i></li>
            </ul>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" active-class="active-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
           <router-link class="nav-link" active-class="active-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
             <i class="fas fa-sign-out-alt"></i> 
          </li>
        </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    data(){
        return{
            isUser:false,
            isAdmin:false,
            isSeller:false,
            isLoggedIn:false
        }
    },
    // mounted(){
    //     this.checkUser();
    // },
    methods:{
        checkUserRole(){

        },
        logOut(){

        },



    }


};
</script>

<style scoped>
.navbar-right-side{
    margin-right: 20px;
    font-size: large;
}
.navbar-left-side{
    margin-left: -10px;
}

.i1{
    height: 65px;
    padding: 5px;
}

#drop1{
    left:-70px;
}

</style>
