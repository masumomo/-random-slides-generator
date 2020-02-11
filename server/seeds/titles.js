exports.seed = function(knex) {
  const titles = [
    { title: "title1" },
    { title: "title2" },
    { title: "title3" },
    { title: "title4" },
    { title: "title5" }
  ];
  return knex("titles")
    .del()
    .then(() => {})
    .then(() => {
      // console.log("highwaysResult :", highwaysResult);
      return knex("titles").insert(titles);
    });
};
