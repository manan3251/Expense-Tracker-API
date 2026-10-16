const { Expense} = require("../models/expenses");
const { Account } = require("../models/accounts");

async function addExpense(req, res) {
    const {
        category,
        amount,
        description,
        date,
        fromAcc,
    } = req.body;

    if ( !category || !description || !fromAcc || typeof amount !== "number" || amount <= 0 ) {
        return res.status(400).json({error: "Required fields are missing"});
    }

    const account = await Account.findById(fromAcc);

    if ( !account ) {
        return res.status(404).json({message:"Account not found"});
    }

    if ( account.balance < amount ) {
        return res.status(400).json({message: "Insufficient balance"});
    }

    account.balance = account.balance - amount;
    await account.save();

    const expense = await Expense.create({
        category,
        amount,
        description,
        date,
        fromAcc,
});

return res.status(201).json({
    message: "Expense added",
    expense
});
}

async function getExpenses(req, res) {

    const expenses = await Expense.find();


return res.status(200).json({
    message: "All expenses are: ",
    expenses,
});
}

async function getExpense(req, res) {
    const {id} = req.params;

const expense = await Expense.findById(id);

if (!expense) {
    return res.status(404).json({
        message: "Expense not found"
    });
}

return res.status(200).json({
    message: "Expense is:",
    expense,
});
}

async function updateExpense(req, res) {
    const {id} = req.params;
    const {
        category,
        amount,
        description,
        date,
        fromAcc,
    } = req.body;

    const expense = await Expense.findByIdAndUpdate(
    id,
    {
        category,
        amount,
        description,
        date,
        fromAcc,
    },
    { new: true }
);

if ( !expense ) {
    return res.status(404).json({message:"Expense not found"});
}

return res.status(200).json({
    message:"Expense Updated Successfully",
    expense,
});
}

async function deleteExpense(req, res) {
    const { id } = req.params;

    // Step 1: Find expense
    const expense = await Expense.findById(id);

    // Step 2: Check if expense exists
    if (!expense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    // Step 3: Find the account linked to this expense
    const account = await Account.findById(expense.fromAcc);

    if (!account) {
        return res.status(404).json({
            message: "Account not found"
        });
    }

    // Step 4: Refund the expense amount
    account.balance = account.balance + expense.amount;
    await account.save();

    // Step 5: Delete the expense
    await Expense.findByIdAndDelete(id);

    return res.status(200).json({
        message: "Expense deleted and balance refunded successfully",
        refundedAmount: expense.amount,
        updatedBalance: account.balance
    });
}

module.exports = {
    addExpense,
    getExpenses,
    getExpense,
    updateExpense,
    deleteExpense,
}