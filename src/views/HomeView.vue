<template>
  <main class="allll">
  <form @submit.prevent="getDefinition">
    <div class="form-outline form-white">
      <input type="text" id="word" class="form-control" placeholder="Nach welchem Wort suchst du?" v-model="word"  />
    <button type="submit" class="pulse-button">Definition anzeigen</button>
    </div>
  </form>
  <p v-if="!validQuery">Fehler: Das Wort nach dem du suchst existiert nicht. Suche nach einem anderem</p>
      <h2 v-if="word && word!==''">Definition für {{word}} : </h2>
  <div v-for="definition in definitionsArray" :key="definition">
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <header class="text-center pb-5">
            </header>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
              <div class="blockquote-custom-icon bg-info shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg><i class="fa fa-quote-left text-white"></i></div>
              <p class="mb-0 mt-2 font-italic">{{definition}}</p>
              <footer class="blockquote-footer pt-4 mt-4 border-top">Definition from :
                <cite title="Source Title">Dictionaryapi</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  </div>
  </main>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup () {
    const validQuery = ref(true)
    const definitionsArray = ref([])
    const word = ref('')

    async function getDefinition () {
      definitionsArray.value.splice(0, definitionsArray.value.length)
      try {
        console.log(word.value)
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word.value
        const { data } = await axios.get(url)
        console.log(data)
        // eslint-disable-next-line array-callback-return
        data.map(({ meanings }) => {
          // eslint-disable-next-line array-callback-return
          meanings.map(({ definitions }) => {
            definitions.forEach(({ definition }) => {
              if (typeof definition === 'string') {
                definitionsArray.value.push(definition)
              }
            })
          })
        })
      } catch (error) {
        console.log(error)
        validQuery.value = false
      }
    }
    return {
      definitionsArray,
      word,
      getDefinition,
      validQuery
    }
  }
}
</script>
<style scoped>
  .form-outline {
    margin: 0 auto;
    width: 50%;
  }
  .form-control {
    border-radius: 1rem;
    padding: 1rem;
  }
  .pulse-button {
    margin: 0 auto;
    display: block;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #cec9c9;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.5rem;
    color: white;
  }
  .pulse-button:hover {
    transform: scale(1.1);
  }
  .blockquote-custom {
    position: relative;
    font-size: 1.1rem;
  }

  .blockquote-custom-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -25px;
    left: 50px;
  }

</style>
