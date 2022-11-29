<template>
  <head>
    <title>Vocabularies</title>
  </head>
  <body>
  <div class="container-fluid">
    <h1 class="titleh1">Vocabularies</h1>
    <div class="row row-cols 1 row-cols-md4 g-4">
      <div class="col" v-for="vocabular in vocabularies" :key="vocabular.id">
        <div class="box">
   <span><h1>{{ vocabularies.indexOf(vocabular) + 1 }}/{{ vocabularies.length }}</h1>
   <div class="word">
     <h2>{{ vocabular.word }}</h2>
   <div class="click">
     <button class="btn btn-danger" @click="deletevocabulary">Delete</button>
     <button class="btn btn-primary" @click="showDefinition(vocabular)"><svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="16" height="16" fill="currentColor"
                                                                             class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg></button>
     </div>
     <div class="definition" v-if="vocabular.showDefinition">
       <h3>{{ vocabular.translation }}</h3>
     </div>
   </div>
   </span>
        </div>
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-bookmark-plus"
         viewBox="0 0 16 16">
      <path
        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      <path
        d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
    </svg>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Create a new Vocabulary</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="createbox">
        <input type="text" placeholder="Word" v-model="word">
        <input type="text" name="" placeholder="Translation" v-model="translation">
        <input type="submit" name="" value="Submit" @click="createvocabulary">
        <input type="reset" mame="" value="Reset">
      </form>
    </div>
  </div>
  </body>
</template>
<script>
export default {
  name: 'Testview',
  data () {
    return {
      vocabularies: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/vokabel', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(vocabular => {
        this.vocabularies.push(vocabular)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    showDefinition (vocabular) {
      vocabular.showDefinition = !vocabular.showDefinition
    },
    createvocabulary () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          word: this.word,
          translation: this.translation
        })
      }
      fetch('http://localhost:8080/api/vokabel', requestOptions)
        .then(response => response.json())
        .then(result => this.vocabularies.push(result))
        .catch(error => console.log('error', error))
    },
    deletevocabulary (vocabular) {
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch('http://localhost:8080/api/vokabel/' + vocabular.id, requestOptions)
        .then(response => response.text())
        .then(result => this.vocabularies.splice(this.vocabularies.indexOf(vocabular), 1))
        .catch(error => console.log('error', error))
    }
  }
}
</script>
<style scoped>
.titleh1 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 150px;
  font-size: 50px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  background-image: linear-gradient(to right, #ff416c, #ff4b2b);
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  margin-left: 5%;
}

.btn-primary {
  margin-left: auto;
}

.box:hover {
  transform: scale(1.05);
}

.word {
  font-size: 1.5em;
  font-weight: bold;
  text-position: center;
  margin: 8%;
  color: #1c1d1e;
}

body {
  background: #1c1d1e;
  marign: 0;
  padding: 0;
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.box {
  width: 300px;
  height: 300px;
  background-color: #d3cfcf;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
}

.box {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  overflow: hidden;
  margin: auto;
}
.box::before {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: conic-gradient(transparent, transparent, transparent, #00ffad);
  animation: rotate 4s linear infinite;
}

.box::after {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: conic-gradient(transparent, transparent, transparent, #1842ad);
  animation: rotate 4s linear infinite;
  animation-delay: -2s;
}

.box span {
  position: absolute;
  inset: 5px;
  background-radius: 16px;
  background-color: #eae5e5;
  z-index: 2;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.definition {
  text-position: auto;
  margin: 8%;
  color: #1c1d1e;
}

.createbox {
  width: 0px;
  padding: 0px;
  left: 60%;
  position: absolute;
  top: 25%;
  transform: translate(-50%, -50%);
  background: #0e0e0e;
  text-align: center;
}

.createbox input[type="text"], .createbox input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: #000000;
  border-radius: 24px;
  transition: 0.25s;
  margin-left: -120px;
}

.createbox input[type="text"]:focus, .createbox input[type="text"]:focus {
  width: 250px;
  position: center;
  border-color: #2ecc71;
}

.createbox input[type="reset"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #f60303;
  padding: 14px 40px;
  outline: none;
  color: #000000;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  font-max-size: large;
  margin-left: -10px;
  width: 140px;
  height: 55px;
}

.createbox input[type="reset"]:hover {
  background: #f60303;
}

.createbox input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: #1f1f1f;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  font-max-size: large;
  margin-left: -160px;
  margin-bottom: -72px;
  width: 140px;
  height: 55px;
}

.createbox input[type="submit"]:hover {
  background: #2ecc71;
}

.offcanvas-body {
  background-image: url("https://www.ay-working.de/wp-content/uploads/2016/04/white-background-images-for-website-white-wallpapers-hd-2014-onlybackground-image.jpg");
}
</style>
