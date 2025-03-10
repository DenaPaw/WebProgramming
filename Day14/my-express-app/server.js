const express = require("express");
const app = express();

// Sample Data
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 }
];

const contacts = [
    { id: 1, name: "Phone", contact: "479-123-4567" },
    { id: 2, name: "Email", contact: "dfak@atu.edu" }
];

const countries = [
    { id: 1, name: "Canada" },
    { id: 2, name: "United States", price: 699 }
];

const customer = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Loki" }
];

const order = [
    { id: 1, name: "Order ID" },
    { id: 2, name: "Customer ID" }
];

// Routing...

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/contacts", (req, res) => {
    res.json(contacts);
});

app.get("/countries", (req, res) => {
    res.json(countries);
});

app.get("/customers", (req, res) => {
    res.json(customer);
});

app.get("/orders", (req, res) => {
    res.json(order);
});

// Start server...
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
