<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">MyLearningApp</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/learn">Lernen</router-link>
          <router-link class="nav-link" to="/test">Test</router-link>
          <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          <router-link class="nav-link" to="/dictonary">Wörterbuch</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
        </ul>
        <ul class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg></router-link>
          <router-link class="nav-link" to="/login" >Login</router-link>
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
