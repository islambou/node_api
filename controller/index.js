const ObjectId = require("mongodb").ObjectId;
const DDBAME = "petStotre";
const connection = require("./config");
const setConnection = require("./config").setConnection;

setConnection();

/**
 * @param obj : the object to be inserted
 * @param coll : collection name to search in
 */
exports.insertIn = async (obj, coll) => {
  let res = await connection.db.collection(coll).insertOne(obj);
  return res;
};

/**
 * @param id : ID of updated object
 * @param obj : new updated object
 * @param coll : collection name
 */
exports.updatetByIdIn = async (id, obj, coll) => {
  let res = await connection.db
    .collection(coll)
    .updateOne({ _id: ObjectId(id) }, { $set: obj });
  return res;
};

/**
 * @param status : the status filter
 * @param coll : collection name to search in
 */
exports.findByStatusIn = async (status, coll) => {
  let res = await connection.db.collection(coll).find({ status: status });
  let arr = await res.toArray();
  return arr;
};

/**
 * @param id : the id of the element
 * @param coll : collection name to search in
 */
exports.findByIdIn = async (id, coll) => {
  let res = await connection.db.collection(coll).findOne({ _id: ObjectId(id) });
  return res;
};
