<template>

  <div class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <router-link class="navbar-brand" to="/">
          <span> Vireak </span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{ active: $route.path == '/' }">
              <router-link to="/" class="nav-link">{{ $t("home") }}<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/about' }">
              <router-link to="/about" class="nav-link"> {{ $t("about") }} </router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/api' }">
              <router-link to="/api" class="nav-link">{{ $t("api") }}</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/team" :class="{ active: $route.path == '/team' }">{{ $t("team") }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/contact' }">
              <router-link to="/contact" class="nav-link">{{ $t("contact") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"><i class="fa fa-user" aria-hidden="true"></i>{{ $t("login") }}</router-link>
            </li>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
            <li class="nav-item">
              <button id="lang" @click="changeLanguage" style="margin: 0; padding: 0; border: 0 none;"><img :src="flagImage" alt="Khmer"></button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flagImage: require('@/assets/imgs/Flag-Cambodia.jpg'), // Default to Khmer flag (set appropriate image paths)
    };
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "khm";
        this.flagImage = require('@/assets/imgs/Flag-English.jpg'); // Switch to English flag
      } else {
        this.$i18n.locale = "en";
        this.flagImage = require('@/assets/imgs/Flag-Cambodia.jpg'); // Switch to Khmer flag
      }
    },
  },
};
</script>