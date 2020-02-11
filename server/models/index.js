module.exports = function(knex) {
  return {
    titles: require("./titles")(knex)
  };
};
