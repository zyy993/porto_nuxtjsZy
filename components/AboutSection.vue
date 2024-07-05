<template>
  <section class="about">
    <h2 class="text-center">About me</h2>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="about-content">
            <h2>Hello, I'm <span class="ezy-name">Ezy</span></h2>
            <p>"Someone who works hard to get what he wants."</p>
            <div class="social-links mt-3">
              <a href="https://github.com/zyy993" target="_blank" class="mr-3">
                <i class="fab fa-github"></i> GitHub
              </a>
              <a href="https://twitter.com/zyy" target="_blank" class="mr-3">
                <i class="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com/slmnlfrsy_" target="_blank">
                <i class="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="/assets/img/zyy.jpg" alt="Ezy" class="img-fluid rounded-circle">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about {
  padding: 80px 0;
  background-color: #161616;
  color: white;
}

.about-content h2 {
  font-size: 36px;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif; /* Contoh penggunaan jenis huruf yang lebih menarik */
}

.about-content .ezy-name {
  color: #fd8791; /* Warna yang menarik untuk nama */
}

.about-content p {
  font-size: 18px;
  line-height: 1.6;
}

.about-content ul {
  list-style: none;
  padding: 0;
}

.about-content ul li {
  margin-bottom: 10px;
}

.social-links a {
  color: white;
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease; /* Contoh animasi perubahan warna saat hover */
}

.social-links a i {
  margin-right: 5px;
}

.social-links a:hover {
  color: #fd8791; /* Warna yang berbeda saat hover */
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border: 5px solid #fff; /* Optional: Add a border around your profile image */
  border-radius: 50%;
}
</style>
