module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./database/actors.db3"
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/actorsTest.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
