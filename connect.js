const mongoose = require("mongoose");

async function expenseTracker() {
    await mongoose.connect("mongodb://localhost:27017/expense-tracker");
    console.log("MongoDB Connected");
}

module.exports = {
    expenseTracker,
};