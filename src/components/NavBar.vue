<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">MyLearningApp</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/learn">Lernen</router-link>
          <router-link class="nav-link" to="/test">Test</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
        </ul>
        <ul class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/login">Login</router-link>
          <router-link class="nav-link" to="/register">Registrieren</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
.container-fluid {
  background-color: rgba(7, 35, 105, 0.49);
  background-image: url("https://cdn.wallpapersafari.com/73/42/BlmdPO.jpg");
background-size: cover;
}
.navbar-nav {
  margin-left: 20px;
}

.navbar-brand {
  font-size: 1.5em;
  font-weight: bold;
  background-image: url("https://thumbs.gfycat.com/ThirstyAlertDarwinsfox-max-1mb.gif");
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.nav-link {
  font-size: 1.0em;
  font-weight: bold;
  color: #f6f6f6;
}
</style>
