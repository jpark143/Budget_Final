const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Total Budget info
const budgetInfo = new Schema({
    currMonth: {
        type:String
    },
    budgetAmount: {
        type:Number
    }
});
const userBudget = mongoose.model('userBudget', budgetInfo);

module.exports = userBudget;

//Expanses info
const ExpanseInfo = new Schema({
    NameOfExpense: {
        type:String
    },
    expesneAmount: {
        type:Number
    }
});
const userExpense = mongoose.model('userExpense', ExpanseInfo);

module.exports = userExpense;

