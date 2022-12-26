<script setup>
import Chart from 'chart.js/auto'
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}
fetch('http://localhost:8080/api/score', requestOptions)
  .then(response => response.json())
  .then(data => {
    const ctx = document.getElementById('myChart')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(score => 'Runde' + ' ' + score.id),
        datasets: [{
          label: 'Score',
          data: data.map(score => score.points),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(5, 1, 25, 0.1)',
            'rgba(255, 206, 12, 0.2)',
            'rgba(75, 192, 300, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(5, 1, 25, 1)',
            'rgba(255, 206, 12, 1)',
            'rgba(75, 192, 300, 1)'
          ],
          borderWidth: 1.2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  })
  .then(result => result.forEach(score => {
    this.score.push(score)
  }))
  .catch(error => console.log('error', error))
</script>
<template>
  <main class="alll">
    <h1 class="titleof">Dashboard</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xl-3">
          <div class="card bg-c-blue order-card">
            <div class="card-block">
              <h6 class="m-b-20">Erstellte Vokabeln</h6>
              <h2 class="text-right"><span>{{ vocabularies.length }}</span></h2>
            </div>
          </div>
        </div>
        <div>
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Quiz Fragen</h6>
                <h2 class="text-right"><span>10</span></h2>
              </div>
            </div>
          </div>
          <h2 class="titleofQuiz">Quiz Score</h2>
          <canvas id="myChart" class="myChart"></canvas>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Dashboard',
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
  }
}
</script>
<style scoped>
.titleof {
  text-align: center;
  font-size: 50px;
  color: #1c1d1e;
}

.titleofQuiz {
  text-align: center;
  font-size: 30px;
  color: #1c1d1e;
  margin-left: -1000px;
}

body {
  margin-top: 50px;
  background: #FAFAFA;
}

.order-card {
  color: #fff;
}

.bg-c-blue {
  background: linear-gradient(45deg, #4099ff, #73b4ff);
}

.bg-c-pink {
  background: linear-gradient(45deg, #FF5370, #ff869a);
}

.card {
  border-radius: 30px;
  -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
  box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
  border: none;
  margin-bottom: 50px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  height: 200px;
  width: 100%;
}

.card .card-block {
  padding: 25px;
}

.order-card i {
  font-size: 26px;
}

.f-left {
  float: left;
}

.f-right {
  float: right;
}

.m-b-20 {
  margin-bottom: 50px;
  font-size: 1rem;
}

.text-right {
  text-align: center;
  font-size: 70px;
  position: center;
  margin-top: -20px;
}

.bg-c-green {
  background: linear-gradient(45deg, #2ed8b6, #59e0c5);
}
.myChart {
  height: 1000px;
  width: 1000px;
}

</style>
