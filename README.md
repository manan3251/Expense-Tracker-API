# Expense Tracker API

A RESTful Expense Tracker API built with **Node.js, Express.js, and MongoDB** to manage financial accounts and track expenses with automatic balance updates.

## Overview

The Expense Tracker API allows users to manage multiple accounts and record expenses against a selected account. It automatically adjusts account balances when expenses are created or deleted and prevents expenses that exceed the available balance.

## Features

- **Account Management:** Create, retrieve, update, and delete accounts.
- **Expense Management:** Create, retrieve, update, and delete expenses.
- **Automatic Balance Deduction:** Deducts the expense amount from the linked account when an expense is created.
- **Balance Refund:** Refunds the expense amount to the linked account when an expense is deleted.
- **Insufficient Balance Validation:** Rejects expenses when the account does not have enough funds.
- **Account References:** Links expenses to accounts using MongoDB ObjectIds.
- **RESTful API Design:** Uses HTTP methods and status codes to manage resources.

## Tech Stack

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **API Testing:** Postman
- **Version Control:** Git and GitHub

## Project Structure

```text
Expense-Tracker-API/
├── controllers/
│   ├── accounts.js
│   └── expenses.js
├── models/
│   ├── accounts.js
│   └── expenses.js
├── routes/
│   ├── accounts.js
│   └── expenses.js
├── .gitignore
├── connect.js
├── index.js
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js and npm
- MongoDB running locally
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/manan3251/Expense-Tracker-API.git
```

**2. Navigate to the project directory**

```bash
cd Expense-Tracker-API
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure MongoDB**

The application currently connects to a local MongoDB database named `expense-tracker`.

Make sure MongoDB is running and verify the connection settings in `connect.js`.

**5. Start the server**

```bash
node index.js
```

The server runs on port `8004` by default.

Visit `http://localhost:8004/` to verify that the server is running.

## API Endpoints

### Accounts

| Method | Endpoint | Description |
|---|---|---|
| POST | `/accounts` | Create an account |
| GET | `/accounts` | Retrieve all accounts |
| GET | `/accounts/:id` | Retrieve an account by ID |
| PATCH | `/accounts/:id` | Update an account |
| DELETE | `/accounts/:id` | Delete an account |

### Expenses

| Method | Endpoint | Description |
|---|---|---|
| POST | `/expenses` | Create an expense |
| GET | `/expenses` | Retrieve all expenses |
| GET | `/expenses/:id` | Retrieve an expense by ID |
| PATCH | `/expenses/:id` | Update an expense |
| DELETE | `/expenses/:id` | Delete an expense |

## Example Requests

### Create an Account

**POST** `/accounts`

```json
{
  "name": "CASH",
  "balance": 1000
}
```

### Create an Expense

**POST** `/expenses`

Replace `ACCOUNT_OBJECT_ID` with the `_id` returned when you create an account.

```json
{
  "category": "Food",
  "amount": 200,
  "description": "Lunch",
  "fromAcc": "ACCOUNT_OBJECT_ID"
}
```

The `date` field is optional and defaults to the current date when omitted.

If the account has sufficient balance, the expense is created and the account balance is reduced accordingly.

## Learning Outcomes

This project provided hands-on practice with:

- Designing RESTful APIs using Express.js
- Organizing code into routes, controllers, and models
- Performing CRUD operations with Mongoose
- Modeling relationships using MongoDB ObjectId references
- Validating request data and handling missing resources
- Implementing business logic across related database documents
- Testing API endpoints with Postman
- Using Git and GitHub for version control

## Future Improvements

- Balance reconciliation when updating expenses
- Filtering, sorting, and pagination
- Category-wise and monthly expense summaries
- Centralized error handling
- Improved data consistency using database transactions
- Automated API tests

## Author

**Manan Arora**

[GitHub Profile](https://github.com/manan3251)

---

*This project was built as a hands-on backend development learning project.*
