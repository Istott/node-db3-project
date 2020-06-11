const db = require("../data/connection.js");

module.exports = {
    add,
    addStep,
    update,
    find,
    findById,
    findSteps,
    remove,

}

function find() {
    return db("schemes");
}

function add(scheme) {
    return db("schemes").insert(scheme, "id")
}

function addStep(step, scheme_id) {
    return db("steps")
        .where(scheme_id)
        .insert(step, "id")
}

function update(changes, id) {
    return db("schemes")
        .where({id})
        .update(changes, "id")
        .then(() => {
            return findById(id)
        });
}

function findById(id) {
    return db("schemes")
        .where({id})
        .first()
}

function remove(id) {
    return db("schemes")
        .where({id})
        .del()
}

function findSteps(id) {
    return db("steps")
        .join("schemes", "schemes.id", "steps.scheme_id")
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
        .where("scheme_id", id)
}