const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON requests


// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Passes control from this middleware to the next
});

let todos = [
    { id: 1, task: "Learn Express", completed: false },
    { id: 2, task: "Build a REST API", completed: false },
];

// GET all todos
app.get("/todos/test", (req, res) => {
    res.json(todos);
});

// GET a single todo by ID
app.get("/todos/:id", (req, res) => {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    todo ? res.json(todo) : res.status(404).json({ message: "Todo not found!" });
});

// POSTing a new todo!
app.post("/todos/new", (req, res) => {
    const newTodo = { id: todos.length + 1, task: req.body.task, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT (update) a todo
app.put("/todos/:id", (req, res) => {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (todo) {
        todo.task = req.body.task || todo.task;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({ message: "Todo not found!" });
    }
});

// PUT (update) a todo
app.delete("/todos/:id", (req, res) => {
    const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
    if (index !== -1) {
        todos.splice(index, 1);
        res.json({ message: "Todo deleted!" });
    } else {
        res.status(404).json({ message: "Todo not found!" });
    }
});

//Delete a todo list
app.delete("/todos/:id", (req, res) => {
    todos = todos.filter((t) => t.id !== parseInt(req.params.id));
    res.json({ message: "Todo deleted!" });
});

// Error handling...
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
