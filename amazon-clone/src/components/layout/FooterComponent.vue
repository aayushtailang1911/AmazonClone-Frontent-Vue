<template>
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© Nitor Infotech</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a href="https://www.facebook.com/AmazonIN/"><svg class="bi" width="24" height="24"></svg><i class="fa-brands fa-facebook"></i></a></li>
      <li class="ms-3"><a href="https://www.instagram.com/amazondotin/?hl=en"><svg class="bi" width="24" height="24"></svg><i class="fa-brands fa-instagram"></i></a></li>
      <li class="ms-3"><a href="https://x.com/amazonin"><svg class="bi" width="24" height="24"></svg><i class="fa-brands fa-twitter"></i></a></li>
    </ul>
  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  position: fixed;
  left: 90px;
  bottom: 0;
  width: 100%;
  text-align: center;
}
a{
    color: grey;
}
</style>