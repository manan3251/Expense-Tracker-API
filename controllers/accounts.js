const {Account} = require("../models/accounts");

async function createAccount(req, res) {
    const {name, balance} = req.body;

    if ( !name || balance === undefined || balance < 0 || typeof balance !== "number" ) {
        return res.status(400).json({message: "Invalid account name or balance"});
}

const account = await Account.create({
    name,
    balance,
});
return res.status(201).json({
message: "Account created successfully",
account: account,
});
}

async function getAccounts(req, res) {
    const accounts = await Account.find();

return res.status(200).json({
    message: "User's Accounts",
    accounts: accounts
});
}

async function getAccountById(req, res) {
    const{id} = req.params;
    const account = await Account.findById(id);

return res.status(200).json({
    message: "User's Account",
    accounts: account
});
}

async function updateAccount(req, res) {
    const { id } = req.params;
    const { name, balance } = req.body;

    const account = await Account.findByIdAndUpdate(
        id,
        { name, balance },
        { new: true }
    );

    if (!account) {
        return res.status(404).json({
            message: "Account not found"
        });
    }

    return res.status(200).json({
        message: "Account updated successfully",
        account
    });
}

async function deleteAccount(req, res) {
    const {id} = req.params;

    const account = await Account.findByIdAndDelete(id);

    if (!account) {
        return res.status(404).json({
            message: "Account not found"
        });
    }

return res.status(200).json({
    message: "Account deleted successfully"
});
}

module.exports = {
    createAccount,
    getAccounts,
    getAccountById,
    updateAccount,
    deleteAccount,
}