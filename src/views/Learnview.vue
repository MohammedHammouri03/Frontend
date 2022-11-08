<template>
  <div class="learn">
    <div class="container">
      <div class="card">
        <div class="front">
          <div class="card-header">
            <h3>Front</h3>
            <button type="button" class="btn btn-primary">Umdrehen</button>
          </div>
        </div>
        <div class="back">
          <div class="card-header">
            <h3>Back</h3>
            <button type="button" class="btn btn-primary">Umdrehen</button>
          </div>
          <div class="back">
            <h3>Back</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Learnview'
}

</script>
<style scoped>
.container {
  position: relative;
  width: 700px;
  height: 433px;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.75s ease;
  transform-style: preserve-3d;
}

.front, .back {
  /* This part controls the flip */
  backface-visibility: hidden;
  /* Size and card position */
  position: absolute;
  width: 100%;
  height: 100%;

  /* Appearance */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
}

.front {
  background-color: #333;
  color: #8ed4ae;
}

.back {
  transform: rotateX(180deg);
  background-color: #a89898;
  color: #333;
}

.btn-primary {
  position: absolute;
  margin-top: 280px;
  margin-left: 35px;
}
</style>
