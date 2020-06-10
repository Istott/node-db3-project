const db = require("../data/connection.js");

module.exports = {
    all,
    add,
    addStep,
    update,
    find,
    findById,
    findSteps,
    remove,

}

function all() {
    return db("schemes");
}

function add(scheme) {
    return db("schemes").insert(scheme, "id")
}

function update(id, changes) {
    return db("schemes")
        .where({id})
        .update({changes});
}

function findById(id) {
    return db("schemes")
        .where({id}).first()
}