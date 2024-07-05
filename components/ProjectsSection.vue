<template>
  <section class="projects">
    <h2 class="text-center">My Projects</h2>
    <div class="project-list">
  <div class="project">
    <h3>Portofolio Pribadi</h3>
    <p>Situs web pribadi yang menampilkan informasi tentang saya, keahlian saya, dan proyek-proyek lain yang pernah saya kerjakan.</p>
    <p><strong>Yang digunakan:</strong> HTML, CSS, JavaScript, Vue.js</p>
  </div>
  <div class="project">
    <h3>Perentalan Mobil Mewah</h3>
    <p>Situs web yang mempermudah menyewa/rental mobil mewah secara mudah dan terpercaya.</p>
    <p><strong>Yang digunakan:</strong> HTML, CSS, JavaScript, React.js</p>
  </div>
  <div class="project">
    <h3>Pemesanan Pesawat</h3>
    <p>Situs web untuk mempermudah pemesanan tiket pesawat dan rute yang di inginkan.</p>
    <p><strong>Yang digunakan:</strong> HTML, CSS, React.js, MySQL</p>
  </div>
  <div class="project">
    <h3>Indah Logistik</h3>
    <p>Situs web yang mempromosikan layanan pengiriman barang dengan murah dan aman.</p>
    <p><strong>Yang digunakan:</strong> HTML, CSS, JavaScript, Laravel, MySQL</p>
  </div>
  <div class="project">
    <h3>Penawaran Destinasi</h3>
    <p>Situs web untuk mempromosikan destinasi yang rekomended untuk sekarang.</p>
    <p><strong>Yang digunakan:</strong> HTML, CSS, Javascript, React.js</p>
  </div>
  <div class="project">
    <h3>Stories Destination</h3>
    <p>Situs web yang mempermudah orang untuk melihat deskripsi tentang destinasi yang ada di indonesia.</p>
    <p><strong>Yang digunakan:</strong> HTML, CSS, Javascript, React.js</p>
  </div>
</div>

  </section>
</template>

<script>
export default {
  name: 'ProjectsSection'
}
</script>

<style scoped>
.projects {
  padding: 80px 0;
  background-color: #161616; /* Warna latar belakang dark */
  color: #fff; /* Warna teks putih */
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project {
  background: #353535; /* Warna background kartu proyek */
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan yang halus */
  width: calc(50% - 20px); /* Lebar dinamis untuk responsivitas */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transisi saat hover */
}

.project:hover {
  transform: translateY(-5px); /* Efek angkat saat hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Bayangan lebih jelas saat hover */
}

.project h3 {
  margin-top: 0;
  font-size: 24px; /* Ukuran font yang lebih besar */
  color: #fd8791; /* Warna pink untuk judul */
}

.project p {
  margin: 10px 0; /* Ruang antar paragraf yang lebih besar */
  font-size: 16px; /* Ukuran font yang lebih besar */
}

.project p strong {
  color: #fd8791; /* Warna pink untuk label teknologi */
}
</style>
