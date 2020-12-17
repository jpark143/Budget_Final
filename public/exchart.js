var ctm = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctm, {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Rent', 'Car', 'Gas', 'Phone Bill', 'Internet'],
        datasets: [{
            label: 'Amount of Expenses',
            data: [100, 500, 200, 60, 50, 90],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend:{
            labels:{
                fontColor: '#edf0f1'
            }
        }
    }
});

var cty = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(cty, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May'],
        datasets: [{
            label: 'Current Balance at the end of the month',
            data: [120, -150, 300, 230, -240],
            backgroundColor: function(context){
                var i = context.dataIndex;
                var budg = context.dataset.data[i];
                return budg < 0 ? 'rgba(255, 99, 132, 0.5)' :
                'rgba(54, 162, 235, 0.5)';
            },
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
            }],
            xAxes:[{
                ticks:{
                    fontColor: '#edf0f1'
                },
            }]
        }
    }
});