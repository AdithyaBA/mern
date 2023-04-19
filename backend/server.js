const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const connectDatabase = require("./config/database");

// Set the PORT
const PORT = process.env.PORT;

// Connecting to database
connectDatabase()

app.listen(PORT, () => {
    console.log(`Server is started on PORT ${PORT} in ${process.env.NODE_ENV} mode`);
})