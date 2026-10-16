const express = require("express");
const router = express.Router();

const { 
    createAccount, 
    getAccounts,
    getAccountById,
    updateAccount,
    deleteAccount,
} = require("../controllers/accounts");

router.get("/", getAccounts);

router.get("/:id", getAccountById);

router.post("/", createAccount);

router.patch("/:id", updateAccount);

router.delete("/:id", deleteAccount);

module.exports = router;