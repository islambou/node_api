const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const DBNAME = "petStotre";

var db = {};
exports.setConnection = async () => {
  console.log("setting connection");
  let connection = await MongoClient.connect(
    url,
    { useNewUrlParser: true }
  );
  exports.db = connection.db(DBNAME);
};

exports.db = db;
