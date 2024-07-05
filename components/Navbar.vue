<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="brand">
        <a href="#">zyc</a>
      </div>
      <ul class="nav-links">
        <li><a href="#home" @click.prevent="scrollTo('home')">Home</a></li>
        <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
        <li><a href="#projects" @click.prevent="scrollTo('projects')">Projects</a></li>
        <li><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #161616;
  padding: 15px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-top: 10px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand{
  margin-top: -20px;
}

.brand a {
  color: #fd8791;
  font-size: 1.8em;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s;
}

.brand a:hover {
  color: #ffffff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1em;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #fd8791;
}
</style>
