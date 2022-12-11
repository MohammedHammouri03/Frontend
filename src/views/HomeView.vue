<template>
  <div class="homepage">
    <h1 class="homepage-title">Willkommen bei MyLearningApp!</h1>
    <p class="homepage-description">Die Website bietet die Möglichkeit neue Vokabeln zu lernen und deine Sprachkünste zu verbessern.</p>
    <p class="homepage-features-title">Mit der Website kannst du:</p>
    <div class="homepage-features-slider">
      <figure class="homepage-feature-image" v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }" @click="handleFeatureClick">
        <img :src="image" alt="Feature" />
        <figcaption>{{ captions[index] }}</figcaption>
      </figure>
      <div class="homepage-arrow left" @click="handlePreviousClick">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="var(--quaternary-color)" />
        </svg>
      </div>
      <div class="homepage-arrow right" @click="handleNextClick">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="var(--quaternary-color)" />
        </svg>
      </div>
    </div>
    <div class="homepage-dots">
      <span class="homepage-dot" v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }" @click="handleDotClick" />
    </div>
    <p class="homepage-cta">Um zu starten, klicke einfach auf die Pfeile um die Features zu erkunden oder nutzte die Leiste oben oder die Punkte unter den Bildern um zu einem spezifischen Feature zu gelangen. Du kannst auf das Feature Bild drücken um zum gewünschten Abschnitt zu gelangen.</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        require('../assets/learn.jpg'),
        require('../assets/quiz.jpg'),
        require('../assets/dashboard.jpg'),
        require('../assets/dictonary.jpg')
      ],
      currentIndex: 0,
      captions: [
        'Karteikarten erstellen und damit lernen',
        'Quize durchführen und deine Kenntnisse testen',
        'Deine Fortschritte verfolgen im Dashboard',
        'Nach Wörtern suchen und diese in Karteikarten speichern'
      ]
    }
  },
  created () {
    setInterval(() => {
      this.handleNextClick()
    }, 3000)
  },
  methods: {
    handlePreviousClick () {
      this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length
    },
    handleNextClick () {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    handleDotClick (event) {
      this
        .currentIndex = Array
          .from(event
            .target
            .parentNode
            .children)
          .indexOf(event.target)
    },
    handleFeatureClick () {
      switch (this.currentIndex) {
        case 0:
          this.$router.push('/learn')
          break
        case 1:
          this.$router.push('/test')
          break
        case 2:
          this.$router.push('/dashboard')
          break
        case 3:
          this.$router.push('/dictonary')
          break
        default:
          break
      }
    }
  }
}
</script>
<style>
:root {
  --primary-color: #333;
  --secondary-color: #d7d7d7;
  --tertiary-color: #777;
  --quaternary-color: #999;
}
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #1c1d1e;
}
.homepage-title {
  background: linear-gradient(to right, white,#a2a2a2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 20px;
}
.homepage-description {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--secondary-color);
  margin: 0;
  text-align: center;
}
.homepage-features-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-align: center;

}
.homepage-features-slider {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 500px;
  margin: 20px 0;
}
.homepage-feature-image {
  cursor: pointer;
  width: 800px;
  height: 500px;
}
.homepage-feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.homepage-feature-image figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
}
.homepage-feature-image.active {
  display: block;
}
.homepage-feature-image:not(.active) {
  display: none;
}

.homepage-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.5s ease;
}
.homepage-arrow:hover {
  background-color: var(--secondary-color);
}
.homepage-arrow.left {
  left: 0;
}
.homepage-arrow.right {
  right: 0;
}
.homepage-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
.homepage-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--primary-color);
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.5s ease;
}
.homepage-dot.active {
  background-color: var(--secondary-color);
}
.homepage-cta {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--secondary-color);
  margin: 0;
  text-align: center;
}
</style>
