const express = require("express");
const {expenseTracker} = require("./connect");
const app = express();

const accountsRouter = require("./routes/accounts");
const expensesRouter = require("./routes/expenses");

const PORT = 8004;
app.use(express.json());

expenseTracker();

app.use("/accounts", accountsRouter);
app.use("/expenses", expensesRouter);

app.get("/", (req, res) => {
    return res.send("Expense Tracker App");
});

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});