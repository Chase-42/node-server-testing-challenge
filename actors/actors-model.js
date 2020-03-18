const db = require("../database/db-config");

function find() {
  return db("actors");
}

function findById(id) {
  return db("actors")
    .where({ id })
    .first();
}

async function insert(actor) {
  const [id] = await db("actors").insert(actor);
  return findById(id);
}

async function update(id, changes) {
  await db("actors")
    .where({ id })
    .update(changes);

  return findById(id);
}

function remove(id) {
  return db("actors")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};
