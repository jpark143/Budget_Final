class budget{
    constructor(addBudgetBtn,addExpenseBtn,table){
        addBudgetBtn.addEventListener('click', this.addBudget.bind(this));
        addExpenseBtn.addEventListener('click', this.addExpense.bind(this));
        table.addEventListener('click', this.deleteExp.bind(this));
        this.budgetAmount = document.querySelector('#addBudget');
        this.errors = document.querySelectorAll(".error");
        this.showBudget = document.querySelector("#display_input");
        this.showExpenses = document.querySelector('#display_output');
        this.showBalance = document.querySelector('#display_balance');
        this.expName = document.querySelector('#expName');
        this.expAmount = document.querySelector('#expAmount');
        this.temp = document.querySelector('#exp_row');
        this.tbody = document.querySelector('tbody');
        this.clone;
    }

    addBudget(){
        if(+this.budgetAmount.value < 0 ||
            +this.budgetAmount.value == 0 ||
            isNaN(+this.budgetAmount.value)){
                this.errors[0].classList.add('error_show');
                this.budgetAmount.classList.add('error_input');
                setTimeout(() => {
                    this.errors[0].classList.remove('error_show');
                    this.budgetAmount.classList.remove('error_input');
                }, 5000);
            }
            else{
                this.showBudget.innerText = +this.budgetAmount.value;
                this.showBalance.innerText = +this.budgetAmount.value - +this.showExpenses.innerText;
                this.budgetAmount.value = '';
            }
    }

    addExpense(){
        if(this.expName.value == '' ||
        /\d/.test(this.expName.value)){
            this.errors[1].classList.add('error_show');
            this.expName.classList.add('error_input');
            setTimeout(() => {
                this.errors[1].classList.remove('error_show');
                this.expName.classList.remove('error_input');
            }, 5000);
        }
        else if(+this.expAmount.value <= 0 ||
            isNaN(+this.expAmount.value)){
            this.errors[2].classList.add('error_show');
            this.expAmount.classList.add('error_input');
            setTimeout(() => {
                this.errors[2].classList.remove('error_show');
                this.expAmount.classList.remove('error_input');
            }, 5000);
        }
        else{
            this.clone = this.temp.content.cloneNode(true);
            let td = this.clone.querySelectorAll('td');
            td[0].innerText = this.expName.value;
            td[1].innerText = +this.expAmount.value;
            this.tbody.appendChild(this.clone);
            this.showExpenses.innerText = +this.showExpenses.innerText + +this.expAmount.value;
            this.showBalance.innerText = +this.showBalance.innerText - +this.expAmount.value;
        }
    }

    deleteExp(d){
        if(d.target.classList.contains('deleteButton')){
            this.showBalance.innerText = +this.showBalance.innerText + +d.target.closest('tr').children[1].innerText;
            this.showExpenses.innerText = +this.showExpenses.innerText - +d.target.closest('tr').children[1].innerText;
            d.target.closest('tr').remove();
        }
    }

}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const addBudgetBtn = document.querySelector('#addButton');
    const addExpenseBtn = document.querySelector('#minButton');
    const table = document.querySelector('table');
    new budget(addBudgetBtn,addExpenseBtn,table);
}

var ctx1 = document.getElementById('myDouChart').getContext("2d");
var myDouChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Doughnut Chart',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(218, 218, 92, 0.2)',
                'rgba(90, 215, 90, 0.2)',
                'rgba(230, 141, 230, 0.2)',
                'rgba(141, 230, 230, 0.2)',
                'rgba(33, 33, 149, 0.2)'

            ],
            borderColor:'#edf0f1',
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display:true,
            text: 'Expense Chart',
            position: 'top',
            fontColor: '#edf0f1',
            fontSize: 20
        },
        legend: {
            labels: {
            fontColor: '#edf0f1',
            fontSize: 16
            }
        }
    }
});

function addData(chart) {
    chart.data.labels.push(document.getElementById("expName").value);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(document.getElementById("expAmount").value * 1);
    });
    chart.update();
}

function updateData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}