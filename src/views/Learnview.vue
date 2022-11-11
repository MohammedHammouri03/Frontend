<template>
  <div class="container">
    <input type="checkbox" id="card-1"/>
    <label class="card-container" for="card-1">
      <div class="card-flip">
        <div class="front card">
          <div class="card-block">
            <h1 class="card-title text-center">Front Card</h1>
          </div>
          <h1>Click on the card to turn around</h1>
        </div>
        <div class="back card">
          <div class="card-block">
            <h1 class="card-title">Back Card</h1>
          </div>
          <h1>Click on the card to turn around</h1>
        </div>
      </div>
    </label>
  </div>
  <button type="button" class="btn btn-primary left"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
  </svg></button>
  <button type="button" class="btn btn-primary middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
  </svg></button>
  <button type="button" class="btn btn-primary right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg></button>
</template>
<script>
export default {
  name: 'Learnview'
}
</script>
<style scoped>
.btn-primary {
  background-color: #1e90ff;
  border-color: #1e90ff;
}
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
