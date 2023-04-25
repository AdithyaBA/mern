const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/shopit', function(err, client) {
if(err) { console.error(err) }
db = client.createCollection('test') // once connected, assign the connection to the global variable
console.log("connected to DB");
})