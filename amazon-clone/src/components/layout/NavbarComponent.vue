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
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Register</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
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
    mounted(){
        this.checkUser();
    },
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
 
</style>
