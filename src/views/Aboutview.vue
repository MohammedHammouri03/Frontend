<template>
  <div class="about">
    <h1 class="h1">Diese Website ist im Rahmen eines Projektes an der HTW Berlin erstellt worden </h1>
    <h2 class="h2">Die Website wurde mit Vue.js und Bootstrap erstellt</h2>
    <h3 class="h3">WebTech WiSe 22/23</h3>
  </div>
<head>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
<div class="container">
  <a href="https://github.com/MohammedHammouri03/Frontend"><i class="fa fa-github-square github" id="github" href="google.com"></i></a>
  <a href="https://www.htw-berlin.de/"><i class="fa fa-google" id="google"></i></a>
  <a href="https://github.com/MohammedHammouri03/webtechProjekt"> <i class="fa fa-github-square github" id="github"></i></a>
  <a href="https://www.instagram.com/htwberlin/?hl=de"><i class="fa fa-instagram" id="instagram"></i></a>
</div>
</body>
</template>
<script>
export default {
  name: 'AboutView'
}
</script>
<style scoped>
.h1 {
  font-size: 1.5em;
  font-weight: bold;
  background-image: url("https://media4.giphy.com/media/cQhmYBg9qPaLYdqajA/200w.gif?cid=6c09b9528wlbzls6gtsgwox9gdcr8mv66wld919f9kyaff68&rid=200w.gif&ct=g");
  background-size: cover;
  -webkit-background-clip: text;
  color: transparent;
}
.h2 {
  font-size: 1.0em;
  font-weight: bold;
  background-image: url("https://media4.giphy.com/media/cQhmYBg9qPaLYdqajA/200w.gif?cid=6c09b9528wlbzls6gtsgwox9gdcr8mv66wld919f9kyaff68&rid=200w.gif&ct=g");
  background-size: cover;
  -webkit-background-clip: text;
  color: transparent;
}

.h3 {
  font-size: 1.0em;
  font-weight: bold;
  background-image: url("https://media4.giphy.com/media/cQhmYBg9qPaLYdqajA/200w.gif?cid=6c09b9528wlbzls6gtsgwox9gdcr8mv66wld919f9kyaff68&rid=200w.gif&ct=g");
  background-size: cover;
  -webkit-background-clip: text;
  color: transparent;
}
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  width: 100vw;
  background: #18191f;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
  margin-left: 100px;
}
#github,
#instagram,
#github,
#google
{
  font-size: 8em;
  background-color: #18191f;
  color: #fff;
  box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
  2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
  inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
  inset 2px 2px 10px #00000080;
  border-radius: 29px;
  padding: 11px 19px;
  margin: 0 40px;
  animation: animate 3s linear infinite;
  text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
  0 0 200px #0072ff;
}
#twitter {
  animation-delay: 0.3s;
}
#facebook {
  animation-delay: 0.7s;
}
#github {
  animation-delay: 0.1s;
}

@keyframes animate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
</style>
