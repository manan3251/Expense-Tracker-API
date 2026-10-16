const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now
    },

    fromAcc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: true,
    },
},
{timestamps: true}
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = {
    Expense,
}