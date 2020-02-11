exports.seed = function(knex) {
  const titles = [
    { title: "Seven Facts You Never Knew About Code Chrysalis" },
    { title: "How Code Chrysalis Can Increase Your Profit!" },
    { title: "Why Is Code Chrysalis The Most Trending Thing Now?" },
    { title: "You Will Never Believe These Bizarre Truth Of Code Chrysalis" },
    { title: "Five Stories of Poteto That Will Inspire You" },
    { title: "This Story Behind Poteto Will Haunt You Forever" },
    { title: "Top 10 Common Prejudices About Poteto" },
    { title: "Here's What No One Tells You About Poteto" },
    { title: "The Story Of Poteto As Told In Five Photos" },
    { title: "Why Is Everyone Talking About Vue.js" },
    { title: "Learn From These Mistakes Before You Learn Vue.js" },
    { title: "Ten Simple (But Important) Things To Remember About Vue.js" },
    { title: "5 Ingenious Ways You Can Do With Vue.js" },
    { title: "Are You Ready For React? Take This Quick Quiz To Find Out" },
    { title: "Now Is The Time For You To Know The Truth About React" },
    { title: "10 React Tips From React Experts" },
    { title: "The Millionaire Guide On React To Help You Get Rich" },
    { title: "Seven Facts About React That Will Blow Your Mind" },
    { title: "What You Know About React And What You Don't Know About React" },
    { title: "Here's What Industry Insiders Say About React" },
    { title: "20 Wonderful React. Number 16 is Absolutely Stunning" }
  ];
  return knex("titles")
    .del()
    .then(() => {})
    .then(() => {
      // console.log("highwaysResult :", highwaysResult);
      return knex("titles").insert(titles);
    });
};
