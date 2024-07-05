import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main$5 = {
  name: "Navbar",
  methods: {
    scrollTo(sectionId) {
      const section = (void 0).getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-0ade9f8f><div class="navbar-container" data-v-0ade9f8f><div class="brand" data-v-0ade9f8f><a href="#" data-v-0ade9f8f>zyc</a></div><ul class="nav-links" data-v-0ade9f8f><li data-v-0ade9f8f><a href="#home" data-v-0ade9f8f>Home</a></li><li data-v-0ade9f8f><a href="#about" data-v-0ade9f8f>About</a></li><li data-v-0ade9f8f><a href="#projects" data-v-0ade9f8f>Projects</a></li><li data-v-0ade9f8f><a href="#contact" data-v-0ade9f8f>Contact</a></li></ul></div></nav>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-0ade9f8f"]]);
const _imports_0$1 = "" + __buildAssetsURL("zy.cvUgzqvh.jpg");
const _sfc_main$4 = {
  name: "HeroSection"
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" data-v-370f71df><section class="hero" data-v-370f71df><div class="container" data-v-370f71df><div class="main-body" data-v-370f71df><div class="row gutters-sm" data-v-370f71df><div class="col-md-4 mb-3" data-v-370f71df><div class="card bg-dark text-white" data-v-370f71df><div class="card-body" data-v-370f71df><div class="d-flex flex-column align-items-center text-center" data-v-370f71df><img${ssrRenderAttr("src", _imports_0$1)} alt="Admin" class="rounded-circle" width="150" data-v-370f71df><div class="mt-3" data-v-370f71df><h4 data-v-370f71df>Zy</h4><p class="text-secondary mb-1" data-v-370f71df>Frontend Developer</p><p class="text-muted font-size-sm" data-v-370f71df>Nglarang, Sleman, Yogyakarta</p><button class="btn btn-light" data-v-370f71df>Follow</button><button class="btn btn-outline-light" data-v-370f71df>Message</button></div></div></div></div><div class="card mt-3 bg-dark" data-v-370f71df><ul class="list-group list-group-flush" data-v-370f71df><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-dark" data-v-370f71df><h6 class="mb-0" data-v-370f71df><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline" data-v-370f71df><circle cx="12" cy="12" r="10" data-v-370f71df></circle><line x1="2" y1="12" x2="22" y2="12" data-v-370f71df></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-370f71df></path></svg> Website </h6><span class="text-secondary" data-v-370f71df>https://zyy.com</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-dark" data-v-370f71df><h6 class="mb-0" data-v-370f71df><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline" data-v-370f71df><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-370f71df></path></svg> Github </h6><span class="text-secondary" data-v-370f71df>zyy993</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-dark" data-v-370f71df><h6 class="mb-0" data-v-370f71df><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info" data-v-370f71df><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-370f71df></path></svg> Twitter </h6><span class="text-secondary" data-v-370f71df>@zyy</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-dark" data-v-370f71df><h6 class="mb-0" data-v-370f71df><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger" data-v-370f71df><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-370f71df></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-370f71df></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-370f71df></line></svg> Instagram </h6><span class="text-secondary" data-v-370f71df>@slmnlfrsy_</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap bg-dark" data-v-370f71df><h6 class="mb-0" data-v-370f71df><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary" data-v-370f71df><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-370f71df></path></svg> Facebook </h6><span class="text-secondary" data-v-370f71df>zyy</span></li></ul></div></div><div class="col-md-8" data-v-370f71df><div class="card mb-3 bg-dark" data-v-370f71df><div class="card-body" data-v-370f71df><div class="row" data-v-370f71df><div class="col-sm-3" data-v-370f71df><h6 class="mb-0 text-white" style="${ssrRenderStyle({ "opacity": "0.8" })}" data-v-370f71df>Full Name</h6></div><div class="col-sm-9 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df> SALMAN AL FARISY </div></div><hr data-v-370f71df><div class="row" data-v-370f71df><div class="col-sm-3" data-v-370f71df><h6 class="mb-0 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df>Email</h6></div><div class="col-sm-9 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df> salmanalfarisy4707@students.amikom.ac.id </div></div><hr data-v-370f71df><div class="row" data-v-370f71df><div class="col-sm-3" data-v-370f71df><h6 class="mb-0 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df>Phone</h6></div><div class="col-sm-9 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df> (+62) 81292919097 </div></div><hr data-v-370f71df><div class="row" data-v-370f71df><div class="col-sm-3" data-v-370f71df><h6 class="mb-0 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df>Hobi</h6></div><div class="col-sm-9 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df> Games, Olahraga </div></div><hr data-v-370f71df><div class="row" data-v-370f71df><div class="col-sm-3" data-v-370f71df><h6 class="mb-0 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df>Address</h6></div><div class="col-sm-9 text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df> Nusa Tenggara Barat </div></div><hr data-v-370f71df><div class="row" data-v-370f71df></div></div></div><div class="row gutters-sm" data-v-370f71df><div class="col-sm-6 mb-3" data-v-370f71df><div class="card h-100 bg-dark text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df><div class="card-body" data-v-370f71df><h6 class="d-flex align-items-center mb-3" data-v-370f71df>Project Status</h6><small data-v-370f71df>Web Design</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div><small data-v-370f71df>Website Markup</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "72%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div><small data-v-370f71df>One Page</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "89%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div><small data-v-370f71df>Mobile Template</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "55%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div><small data-v-370f71df>Backend API</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "66%" })}" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div></div></div></div><div class="col-sm-6 mb-3" data-v-370f71df><div class="card h-100 bg-dark text-white" style="${ssrRenderStyle({ "opacity": "0.7" })}" data-v-370f71df><div class="card-body" data-v-370f71df><h6 class="d-flex align-items-center mb-3" data-v-370f71df>Skill</h6><small data-v-370f71df>HTML</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div><small data-v-370f71df>CSS</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "72%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div><small data-v-370f71df>REACT</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "89%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div><small data-v-370f71df>Vue</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "55%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div><small data-v-370f71df>Laravel</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-370f71df><div class="progress-bar bg-pink" role="progressbar" style="${ssrRenderStyle({ "width": "66%" })}" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" data-v-370f71df></div></div></div></div></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-370f71df"]]);
const _imports_0 = "" + __buildAssetsURL("zyy.CQ9nOxgD.jpg");
const _sfc_main$3 = {
  name: "AboutSection"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-0f232409><h2 class="text-center" data-v-0f232409>About me</h2><div class="container" data-v-0f232409><div class="row align-items-center" data-v-0f232409><div class="col-md-6" data-v-0f232409><div class="about-content" data-v-0f232409><h2 data-v-0f232409>Hello, I&#39;m <span class="ezy-name" data-v-0f232409>Ezy</span></h2><p data-v-0f232409>&quot;Someone who works hard to get what he wants.&quot;</p><div class="social-links mt-3" data-v-0f232409><a href="https://github.com/zyy993" target="_blank" class="mr-3" data-v-0f232409><i class="fab fa-github" data-v-0f232409></i> GitHub </a><a href="https://twitter.com/zyy" target="_blank" class="mr-3" data-v-0f232409><i class="fab fa-twitter" data-v-0f232409></i> Twitter </a><a href="https://instagram.com/slmnlfrsy_" target="_blank" data-v-0f232409><i class="fab fa-instagram" data-v-0f232409></i> Instagram </a></div></div></div><div class="col-md-6" data-v-0f232409><img${ssrRenderAttr("src", _imports_0)} alt="Ezy" class="img-fluid rounded-circle" data-v-0f232409></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-0f232409"]]);
const _sfc_main$2 = {
  name: "ProjectsSection"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "projects" }, _attrs))} data-v-8f7b9b6e><h2 class="text-center" data-v-8f7b9b6e>My Projects</h2><div class="project-list" data-v-8f7b9b6e><div class="project" data-v-8f7b9b6e><h3 data-v-8f7b9b6e>Portofolio Pribadi</h3><p data-v-8f7b9b6e>Situs web pribadi yang menampilkan informasi tentang saya, keahlian saya, dan proyek-proyek lain yang pernah saya kerjakan.</p><p data-v-8f7b9b6e><strong data-v-8f7b9b6e>Yang digunakan:</strong> HTML, CSS, JavaScript, Vue.js</p></div><div class="project" data-v-8f7b9b6e><h3 data-v-8f7b9b6e>Perentalan Mobil Mewah</h3><p data-v-8f7b9b6e>Situs web yang mempermudah menyewa/rental mobil mewah secara mudah dan terpercaya.</p><p data-v-8f7b9b6e><strong data-v-8f7b9b6e>Yang digunakan:</strong> HTML, CSS, JavaScript, React.js</p></div><div class="project" data-v-8f7b9b6e><h3 data-v-8f7b9b6e>Pemesanan Pesawat</h3><p data-v-8f7b9b6e>Situs web untuk mempermudah pemesanan tiket pesawat dan rute yang di inginkan.</p><p data-v-8f7b9b6e><strong data-v-8f7b9b6e>Yang digunakan:</strong> HTML, CSS, React.js, MySQL</p></div><div class="project" data-v-8f7b9b6e><h3 data-v-8f7b9b6e>Indah Logistik</h3><p data-v-8f7b9b6e>Situs web yang mempromosikan layanan pengiriman barang dengan murah dan aman.</p><p data-v-8f7b9b6e><strong data-v-8f7b9b6e>Yang digunakan:</strong> HTML, CSS, JavaScript, Laravel, MySQL</p></div><div class="project" data-v-8f7b9b6e><h3 data-v-8f7b9b6e>Penawaran Destinasi</h3><p data-v-8f7b9b6e>Situs web untuk mempromosikan destinasi yang rekomended untuk sekarang.</p><p data-v-8f7b9b6e><strong data-v-8f7b9b6e>Yang digunakan:</strong> HTML, CSS, Javascript, React.js</p></div><div class="project" data-v-8f7b9b6e><h3 data-v-8f7b9b6e>Stories Destination</h3><p data-v-8f7b9b6e>Situs web yang mempermudah orang untuk melihat deskripsi tentang destinasi yang ada di indonesia.</p><p data-v-8f7b9b6e><strong data-v-8f7b9b6e>Yang digunakan:</strong> HTML, CSS, Javascript, React.js</p></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8f7b9b6e"]]);
const _sfc_main$1 = {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      },
      formStatus: ""
    };
  },
  methods: {
    submitForm() {
      setTimeout(() => {
        this.formStatus = "Form submitted successfully!";
        this.formData.name = "";
        this.formData.email = "";
        this.formData.message = "";
      }, 1e3);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))} data-v-fcaf1e7a><div class="contact-me" data-v-fcaf1e7a><h1 class="secondary-text" data-v-fcaf1e7a>Contact Me</h1><form data-v-fcaf1e7a><div class="form-group" data-v-fcaf1e7a><label for="name" class="secondary-text" data-v-fcaf1e7a>Name:</label><input type="text" id="name"${ssrRenderAttr("value", $data.formData.name)} required data-v-fcaf1e7a></div><div class="form-group" data-v-fcaf1e7a><label for="email" class="secondary-text" data-v-fcaf1e7a>Email:</label><input type="email" id="email"${ssrRenderAttr("value", $data.formData.email)} required data-v-fcaf1e7a></div><div class="form-group" data-v-fcaf1e7a><label for="message" class="secondary-text" data-v-fcaf1e7a>Message:</label><textarea id="message" rows="4" required data-v-fcaf1e7a>${ssrInterpolate($data.formData.message)}</textarea></div><button type="submit" data-v-fcaf1e7a>Submit</button></form>`);
  if ($data.formStatus) {
    _push(`<div class="form-status" data-v-fcaf1e7a>${ssrInterpolate($data.formStatus)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fcaf1e7a"]]);
const _sfc_main = {
  components: {
    Navbar: __nuxt_component_0,
    HeroSection: __nuxt_component_1,
    AboutSection: __nuxt_component_2,
    ProjectsSection: __nuxt_component_3,
    ContactSection: __nuxt_component_4
  },
  data() {
    return {
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0;
  const _component_HeroSection = __nuxt_component_1;
  const _component_AboutSection = __nuxt_component_2;
  const _component_ProjectsSection = __nuxt_component_3;
  const _component_ContactSection = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<main><div id="home">`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(`</div><div id="about">`);
  _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
  _push(`</div><div id="projects">`);
  _push(ssrRenderComponent(_component_ProjectsSection, null, null, _parent));
  _push(`</div><div id="contact">`);
  _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
  _push(`</div></main><footer class="footer"><p> © <span>${ssrInterpolate($data.currentYear)}</span>. Zyy993. All Rights Reserved. </p></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-8cIBAu5Z.js.map
