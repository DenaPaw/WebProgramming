require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//POSTGRESQL Connections...
const personalInfo = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PERSONAL,
    port: process.env.DB_PORT,
});

const hobbiesPool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_HOBBIES,
    port: process.env.DB_PORT,
});

//GET all projects
app.get("/personal", async (req, res) => {
    try {
        const result = await personalInfo.query("SELECT * FROM personal_info");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

app.post("/personal", async (req, res) => {
    try {
      const { name, age, email } = req.body;
      console.log("Incoming data:", { name, age, email }); 
      const result = await personalInfo.query(
        "INSERT INTO personal_info (name, age, email) VALUES ($1, $2, $3) RETURNING *",
        [name, age, email]
      );
  
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error("Error in POST /personal:", err); 
      res.status(500).send("Server Error!");
    }
  });
  
// ✅ GET all hobbies
app.get("/hobbies", async (req, res) => {
    try {
        const result = await hobbiesPool.query("SELECT * FROM hobbies");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

app.post("/hobbies", async (req, res) => {
    try {
        const { hobby_name, description } = req.body;

        console.log("Received:", { hobby_name, description }); 
        const result = await hobbiesPool.query(
            "INSERT INTO hobbies (hobby_name, description) VALUES ($1, $2) RETURNING *",
            [hobby_name, description]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Error in POST /hobbies:", err);
        res.status(500).send("Server Error!");
    }
});


// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
