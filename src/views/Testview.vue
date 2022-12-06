<script setup>
import { computed, ref } from 'vue'

const questions = ref([
  {
    question: 'Alles klar auf Englisch',
    answer: 0,
    options: [
      'Alright',
      'Yes',
      'No',
      'Yeah'
    ],
    selected: null
  },
  {
    question: 'Flughafen auf Englisch',
    answer: 3,
    options: [
      'aeropuerto',
      'plane',
      'airplane',
      'airport'
    ],
    selected: null
  },
  {
    question: 'Bäckerei auf Englisch',
    answer: 2,
    options: [
      'Baker',
      'Factory',
      'bakery',
      'shop'
    ],
    selected: null
  },
  {
    question: 'Billig auf Englisch',
    answer: 1,
    options: [
      'expensive',
      'cheap',
      'discount',
      'none of the above'
    ],
    selected: null
  },
  {
    question: 'Frühstuck auf Englisch',
    answer: 0,
    options: [
      'breakfast',
      'lunch',
      'dinner',
      'napkin'
    ],
    selected: null
  },
  {
    question: 'Schlaufzimmer auf Englisch',
    answer: 1,
    options: [
      'room service',
      'bedroom',
      'floor',
      'reception'
    ],
    selected: null
  },
  {
    question: 'Augenbraue auf Englisch',
    answer: 2,
    options: [
      'eye',
      'head',
      'eyebrow',
      'lips'
    ],
    selected: null
  },
  {
    question: 'Reich auf Englisch',
    answer: 3,
    options: [
      'poor',
      'money',
      'chief',
      'rich'
    ],
    selected: null
  },
  {
    question: 'Wichitg auf Englisch',
    answer: 2,
    options: [
      'serious',
      'funny',
      'important',
      'strong'
    ],
    selected: null
  },
  {
    question: 'Versuchen auf Englisch',
    answer: 0,
    options: [
      'to try',
      'to want',
      'to find',
      'to see'
    ],
    selected: null
  }
])
const quizcompleted = ref(false)
const currentquestion = ref(0)
const points = computed(() => {
  let value = 0
  questions.value.map(q => {
    // eslint-disable-next-line eqeqeq
    if (q.selected == q.answer) {
      value++
    }
    return value
  })
  return value
})
const getcurrentquestion = computed(() => {
  const question = questions.value[currentquestion.value]
  question.index = currentquestion.value
  return question
})
const SetAnswer = evt => {
  questions.value[currentquestion.value].selected = evt.target.value
  evt.target.value = null
}
const NextQuestion = () => {
  if (currentquestion.value < questions.value.length - 1) {
    currentquestion.value++
  } else {
    quizcompleted.value = true
  }
}
const restart = () => {
  window.location.reload()
}
const savescore = () => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    points: points.value
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  fetch('http://localhost:8080/api/score', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
  alert('Du hast den Score erfolgreich gespeichert')
}
</script>
<template>
  <main class="app">
    <h1>Verbessere dein Englisch!</h1>
    <section class="quiz" v-if="!quizcompleted">
      <div class="quiz-info">
        <span class="question">{{ getcurrentquestion.question }}</span>
        <span class="score">Score {{ points }}/{{ questions.length }}</span>
      </div>
      <div class="options">
        <label v-for="(option, index) in getcurrentquestion.options" :key="index"
               :class="`option ${ getcurrentquestion.selected == index ? index == getcurrentquestion.answer ? 'correct' : 'wrong' : '' } ${getcurrentquestion.selected != null && index != getcurrentquestion.selected ? 'disabled' : '' }`">
          <input type="radio" :name="getcurrentquestion.index" :value="index" v-model="getcurrentquestion.selected"
                 :disabled="getcurrentquestion.selected" @change="SetAnswer">
          <span>{{ option }}</span>
        </label>
      </div>
      <button @click="NextQuestion"
              :disabled="!getcurrentquestion.selected">
        {{
          getcurrentquestion.index == questions.length - 1
            ? 'Fertig' : getcurrentquestion.selected == null ? 'Wähle eine Antwort' : 'Nächste Frage'
        }}
      </button>
    </section>
    <section v-else>
      <h2>Du hast das Quiz beendet</h2>
      <p>Dein Score ist {{ points }}/{{ questions.length }}</p>
      <button @click="restart">Quiz neu starten</button>
      <button @click="savescore">Score speichern</button>
      <a href="/dashboard"><button>Dashboard anzeigen</button></a>
    </section>
  </main>
</template>
<script>
</script>
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: #1c1d1e;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  color: white;
}

.h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.quiz {
  background-color: #382a4b;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question {
  color: #8f8f8f;
  font-size: 1.25rem;
}

.quiz-info .score {
  color: white;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  display: block;
  padding: 1rem;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.option:hover {
  background-color: #2d213f;
}

.option.correct {
  background-color: #2ecc71;
}

.option.wrong {
  background-color: red;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

button:disabled {
  opacity: 0.5;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {
  color: #8f8f8f;
  font-size: 1.25rem;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.25rem;
  text-align: center;
}
</style>
