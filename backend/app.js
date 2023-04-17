const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose  = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./routes/auth");

// Connect to MongoDB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
}).then(() => {
    console.log("CONNECTED TO MONGODB");
}).catch((err) => {
    console.log("MONGODB CONNECTION FAILED", err.message);
})

// Middlware
app.use(bodyParser.json())
app.use(cors());

app.use("/api/v1", userRouter);

// PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})