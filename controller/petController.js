const COLLECTION = require("./collections").PETS_COLLECTION;
const global = require("./");

/**
 * @param obj : the object to be inserted
 */
exports.insert = async obj => {
  return global.insertIn(obj, COLLECTION);
};

/**
 * @param id : ID of updated object
 * @param obj : new updated object
 */
exports.updatetById = async (id, obj) => {
  return global.updatetByIdIn(id, obj, COLLECTION);
};

/**
 * @param status : the status filter
 */
exports.findByStatus = async status => {
  return global.findByStatusIn(status, COLLECTION);
};

/**
 * @param id : the id of the element
 */
exports.findById = async id => {
  return global.findByIdIn(id, COLLECTION);
  return res;
};
