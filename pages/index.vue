<template>
  <div id="app">
    <Navbar />
    <main>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
    <footer class="footer">
      <p>
        &copy; <span>{{ currentYear }}</span>. Zyy993. All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    ProjectsSection,
    ContactSection
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style>


#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #161616;

}

main {
  flex: 1;
}

.footer {
  background-color: #161616;
  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
}

.footer p {
  margin: 0;
  font-size: 1em;
}

.footer span {
  color: #fd8791;
}


#home, #about, #projects, #contact {
  padding: 50px 15px;
  background-color: #161616;
  border: 1px solid #161616;
  border-radius: 8px;
  margin-bottom: 20px;
}

#home {
  background-color: #161616; 
}

#about {
  background-color: #161616; 
}

#projects {
  background-color: #161616; 
}

#contact {
  background-color: #161616; 
}
</style>
