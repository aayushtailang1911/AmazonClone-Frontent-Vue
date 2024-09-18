<template>
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
    </ul>
  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 1170px;
  margin: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

ul {
  list-style: none;
  padding-left: 0;
}

.footer {
  background-color: white;
  padding: 62px 0;
}

.footer-col {
  width: 22%;
  padding: 0 15px;
}

.footer-col h4 {
  font-size: 20px;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 600;
  border-bottom: 2px solid green;
  padding-bottom: 10px;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-col ul li a:hover {
  color: #007bff;
  padding-left: 10px;
}

.footer-col .social-links {
  display: flex;
  gap: 10px;
}

.footer-col .social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #e9ecef;
  border-radius: 50%;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
}

.footer-col .social-links a:hover {
  background-color: #007bff;
  color: #fff;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .footer-col {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .footer-col {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 40px 0;
  }
}
</style>