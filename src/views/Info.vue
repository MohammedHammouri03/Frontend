<template>
  <div class="info">
    <h1 class="info__title">
      Info
    </h1>
    <p class="info__text">MyLearningApp ist eine Lern-App, die dir dabei hilft, dein Englisch zu verbessern.</p>
    <p class="info__text">Die App ist noch in der Entwicklung und es gibt noch viel zu tun.</p>
    <p class="info__text">Es wird in Zukunft noch viele neue Funktionen geben, die die App noch besser machen.</p>
    <p class="info__text">Wenn du Ideen hast, wie die App noch besser werden kann, kannst du mich gerne kontaktieren</p>
    <p class="info__text">Die App ist frei verfügbar und du kannst sie auf <a class="info__link"
                                                                              href="https://github.com/">GitHub</a>
      finden.</p>
    <p class="info__text">Die App wurde hauptsächlich mit <a class="info__link" href="https://vuejs.org/"
                                                             target="_blank">Vue.js</a> erstellt.</p>

    <form class="info__form" @submit.prevent="submitIdea">
      <h2 class="info__form-title">Idee Teilen</h2>
      <label class="info__form-label" for="name" required>Name:</label>
      <input
        class="info__form-input"
        type="text"
        id="name"
        v-model="name"
        required
      />
      <label class="info__form-label" for="email" required>Email:</label>
      <input
        class="info__form-input"
        type="email"
        id="email"
        v-model="email"
        required
      />
      <label class="info__form-label" for="idea" reuired>Idea:</label>
      <textarea
        class="info__form-textarea"
        id="idea"
        v-model="idea"
        required
      ></textarea>
      <button class="info__form-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      idea: ''
    }
  },
  methods: {
    submitIdea () {
      if (this.name && this.email && this.idea) {
        alert('Thank you for your idea! Wir werden uns so schnell wie möglich bei dir melden.')
        fetch('http://localhost:8080/api/idea', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            idea: this.idea
          })
        })
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error))
        window.location.reload()
      } else {
        alert('Bitte alle Felder ausfüllen!')
      }
    }
  }
}
</script>
<style>
.info {
  margin: 20px;
  color: #fff;
  background-color: #222;
}

.info__title {
  margin-bottom: 20px;
  font-size: 36px;
  background: linear-gradient(to right, #3f51b5, #f50057);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info__text {
  margin-bottom: 10px;
  font-size: 18px;
  font-style: italic;
}

a.info__link {
  color: #3f51b5;
  text-decoration: none;
  border-bottom: 2px solid #3f51b5;
  transition: color 0.2s ease-in-out;
}

a.info__link:hover {
  color: #f50057;
}

.info__form {
  margin-top: 20px;
}

.info__form-title {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
}

.info__form-label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
}

.info__form-input,
.info__form-textarea {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.info__form-button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  cursor: pointer;
}

.info__form-button:hover {
  background-color: #f50057;
}

</style>
