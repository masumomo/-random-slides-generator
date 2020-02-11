const moment = require("moment");

const Title = function(dbTitle) {
  console.log("dbTitle :", dbTitle);
  this.id = dbTitle.id;
  this.title = dbTitle.title;
  this.createdAt = new Date(dbTitle.created_at);
};

Title.prototype.serialize = function() {
  return {
    id: this.id,
    title: this.title,
    createdAt: moment(this.createdAt).format("hh:mm:ss")
  };
};

module.exports = knex => {
  return {
    create: require("./create")(knex, Title),
    list: require("./list")(knex, Title)
  };
};
