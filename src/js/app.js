const storedData = localStorage.getItem('weightData');
const data = storedData ? JSON.parse(storedData) : [];

const form = document.getElementById('data-form');
const weightInput = document.getElementById('weight');
const dateInput = document.getElementById('date');
const tableBody = document.querySelector('#history-table tbody');
const ctx = document.getElementById('progress-chart').getContext('2d');

function updateTable() {
  tableBody.innerHTML = '';
  data.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${entry.date}</td><td>${entry.weight} kg</td>`;
    tableBody.appendChild(row);
  });
}

function updateChart(chart) {
  chart.data.labels = data.map(entry => entry.date);
  chart.data.datasets[0].data = data.map(entry => entry.weight);
  chart.update();
}

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: data.map(entry => entry.date),
    datasets: [{
      label: 'Poids (kg)',
      data: data.map(entry => entry.weight),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Poids (kg)'
        }
      }
    }
  }
});

function saveData() {
  localStorage.setItem('weightData', JSON.stringify(data));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = parseFloat(weightInput.value);
  const date = dateInput.value;

  if (!isNaN(weight) && date) {
    data.push({ date, weight });

    updateTable();
    updateChart(chart);

    saveData();

    form.reset();
  } else {
    alert('Veuillez entrer un poids valide et une date.');
  }
});

updateTable();
updateChart(chart);
