exports.up = function(knex, Promise) {
  // create the 'users' table with three columns
  return knex.schema.createTable("titles", t => {
    t.increments().index();

    t.string("title", 200)
      .notNullable()
      .index();

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("titles");
};
