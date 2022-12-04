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
          borderWidth: 1
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
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
</script>
