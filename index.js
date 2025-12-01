require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
const PORT = 2000;

mongoose
.connect(process.env.DB_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection Error:", err))

// built-in middleware  for parsing JSON
app.use(express.json());
app.use(cors())     

const userRoutes = require("./routes/userRoute")
app.use("/users", userRoutes)

app.listen(PORT, () =>{
    console.log(`App running on http://localhost:${PORT}`)
});