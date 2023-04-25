const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((con) => {
        console.log(`MONGODB DATABASE CONNECTED WITH HOST ${con.connection.host}`);
    }).catch((err) => {
        console.log("MONGODB CONNECTION FAILED", err.message);
    })
    // try{
    //     mongoose.connect(process.env.DB_LOCAL_URI, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     })
    //     console.log(`MONGODB DATABASE CONNECTED WITH HOST ${process.env.PORT}`);
    // }
    // catch(err){
    //     console.log("MONGODB CONNECTION FAILED", err.message);
    // }
}

module.exports = connectDatabase;