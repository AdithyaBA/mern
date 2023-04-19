const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`Mongodb database connected with host ${con.connection.host}`);
    }).catch((err) => {
        console.log("MONGODB CONNECTION FAILED", err.message);
    })
}

module.exports = connectDatabase;