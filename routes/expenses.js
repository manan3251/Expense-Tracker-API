const express = require("express");
const router = express.Router();

const {
    addExpense,
    getExpenses,
    getExpense,
    updateExpense,
    deleteExpense,
} = require("../controllers/expenses");

router.get("/", getExpenses);

router.get("/:id", getExpense);

router.post("/", addExpense);

router.patch("/:id", updateExpense);

router.delete("/:id", deleteExpense);

module.exports = router;