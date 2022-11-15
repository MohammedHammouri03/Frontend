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
      <button class="btn btn-primary" @click="showDefinition(vocabular)">Show Definition</button>
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
  </body>
</template>
<script>
export default {
  name: 'Testview',
  data () {
    return {
      vocabularies: [
        {
          id: 0,
          word: 'Hello',
          translation: 'Hallo'
        },
        {
          id: 1,
          word: 'learn',
          translation: 'lernen'
        },
        {
          id: 2,
          word: 'study',
          translation: 'studieren'
        },
        {
          id: 3,
          word: 'school',
          translation: 'Schule'
        },
        {
          id: 4,
          word: 'university',
          translation: 'Universität'
        },
        {
          id: 5,
          word: 'college',
          translation: 'Hochschule'
        },
        {
          id: 6,
          word: 'teacher',
          translation: 'Lehrer'
        },
        {
          id: 7,
          word: 'student',
          translation: 'Student'
        },
        {
          id: 8,
          word: 'class',
          translation: 'Klasse'
        },
        {
          id: 9,
          word: 'lesson',
          translation: 'Unterricht'
        },
        {
          id: 10,
          word: 'exam',
          translation: 'Prüfung'
        },
        {
          id: 11,
          word: 'test',
          translation: 'Test'
        }
      ]
    }
  },
  methods: {
    showDefinition (vocabular) {
      vocabular.showDefinition = !vocabular.showDefinition
    }
  }
}
</script>
<style scoped>
.word {
  font-size: 1.5em;
  font-weight: bold;
  text-position: center;
  margin: 25%;
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
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  overflow: hidden;
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
</style>
