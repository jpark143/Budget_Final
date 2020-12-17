var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Total Budget',
            data: [],
            backgroundColor:'rgba(54, 162, 235, 0.5)',
            borderColor: '#edf0f1',
            borderWidth: 1
        },{
            label: 'Total Expenses',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: '#edf0f1',
            borderWidth: 1
        }]
    },

    options: {
        tooltips:{
            mode: 'index'
        },
        legend:{
            labels:{
                fontColor: '#edf0f1'
            }
        },
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero: true,
                    fontColor: '#edf0f1'
                    
                },
                // stacked: true
            }],
            xAxes:[{
                ticks:{
                    fontColor: '#edf0f1'
                },
                // stacked: true
            }]
        }
    }
});


function addData2(chart) {
    chart.data.labels.push(document.getElementById("month").value);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(document.getElementById("TB").value * 1);
    });
    chart.update();
}

function removeData2(chart) {
    chart.data.labels.pop(document.getElementById("monthB").value);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop(document.getElementById("TB").value *1);
    });
    chart.update();
}

// function addData3(chart) {
//     chart.data.labels.push(document.getElementById("monthE").value);
//     chart.data.datasets.forEach((datasets2) => {
//         datasets2.data.push(document.getElementById("TE").value * 1);
//     });
//     chart.update();
// }

// function removeData3(chart) {
//     chart.data.labels.pop(document.getElementById("monthE").value);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.pop(document.getElementById("TE").value *1);
//     });
//     chart.update();
// }