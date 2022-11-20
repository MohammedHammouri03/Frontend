<template>
  <head>
    <title>Vocabularies</title>
  </head>
  <body>
  <div class="container-fluid">
    <div class="row row-cols 1 row-cols-md4 g-4">
      <div class="col" v-for="vocabular in vocabularies" :key="vocabular.id">
        <div class="box">
   <span><h1>{{ vocabularies.indexOf(vocabular) + 1 }}/{{ vocabularies.length }}</h1>
   <div class="word">
     <h2>{{ vocabular.word }}</h2>
   <div class="click">
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
      <form>
        <div class="mb-3">
          <label for="word" class="form-label">Word</label>
          <input type="text" class="form-control" id="word" v-model="word">
        </div>
        <div class="mb-3">
          <label for="translation" class="form-label">Translation</label>
          <input type="text" class="form-control" id="translation" v-model="translation">
        </div>
        <button type="submit" class="btn btn-primary" @click="createVocabulary(vocabularies2)">Submit</button>
        <button type="reset" class="btn btn-danger" @click="resetForm">Reset</button>
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
    fetch('http://localhost:8080/api/vocabularies', requestOptions)
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
    data () {
      return {
        vocabularies2: [],
        word: '',
        translation: ''
      }
    },
    methods: {
      createVocabulary () {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const raw = JSON.stringify({
          word: this.word,
          translation: this.translation
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: raw,
          redirect: 'follow'
        }
        fetch('http://localhost:8080/api/vocabularies', requestOptions)
          .catch(error => console.log('error', error))
      }
    }
  }
}
</script>
<style scoped>
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
</style>
