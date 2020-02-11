const validateTitle = title =>
  typeof title === "string" && title.replace(" ", "").length > 2;

module.exports = (knex, Title) => {
  return params => {
    const title = params.title;
    if (!validateTitle(title)) {
      return Promise.reject(
        new Error("title must be provided, and be at least two characters")
      );
    }

    return knex("titles")
      .insert({ title })
      .then(() => {
        console.log("title :", title);
        return knex("titles")
          .where({ title })
          .select();
      })
      .then(titles => new Title(titles.pop()))
      .catch(err => {
        // sanitize known errors
        if (
          err.message.match("duplicate key value") ||
          err.message.match("UNIQUE constraint failed")
        )
          return Promise.reject(new Error("That title already exists"));

        // throw unknown errors
        return Promise.reject(err);
      });
  };
};
