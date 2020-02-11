module.exports = (knex, Title) => {
  // console.log("knex :", knex);
  return () => {
    return knex("titles")
      .select()
      .then(titles => {
        console.log("titles2 :", titles);
        return titles.map(titles => titles);
      });
  };
};
