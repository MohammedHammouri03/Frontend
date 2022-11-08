<template>
  <div class="container">
      <input type="checkbox" id="card-1"/>
      <label class="col-md-4 card-container" for="card-1">
        <div class="card-flip">
          <div class="card front">
            <div class="card-block">
              <h1 class="card-title text-center">Front Card Title</h1>
            </div>
          </div>
          <div class="card back">
            <div class="card-block">
              <h1 class="card-title">Back Card Title</h1>
            </div>
          </div>
        </div>
      </label>
    </div>
</template>
<script>
export default {
  name: 'Aboutview'
}
</script>
<style scoped>
.card-title {
  font-size: 2em;
  font-weight: 800;
  line-height: 3em;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #141515;
}
.card {
  margin: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #f6f1f1;
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  position: relative;
  font-max-size: large;
}
.card-block {
  padding: 10.5rem;
}
input[type='checkbox'] {
  display: none;
}
.card-container {
  display: grid;
  perspective: 700px;
  margin-left: 200px;
  width: 65%;
}

.card-flip {
  display: grid;
  grid-template: 1fr / 1fr;
  grid-template-areas: "frontAndBack";
  transform-style: preserve-3d;
  transition: all 0.7s ease;
}

.card-flip div {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.front {
  grid-area: frontAndBack;
}
.back {
  grid-area: frontAndBack;
  transform: rotateY(180deg);
}
input[type='checkbox']:checked + .card-container .card-flip {
  transform: rotateY(180deg);
}
</style>
