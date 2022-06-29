const { Post } = require("../models");

const postdata = [
  {
    title: "Tyrone Taleni from Samoa to USC for a sport he never played",
    content:
      "USC defensive lineman Tyrone Taleni has taken an unconventional path on his journey to become a college football player, having been introduced to the sport just five years ago.(USC Athletics)",
    user_id: 1,
  },
  {
    title: "Why pro sport team values only go up",
    content:
      "Professional sports team valuations are ruled by the law of scarcity, no matter the geography or game.",
    user_id: 2,
  },
  {
    title: "EA Sports F1 2022: Is it worth buying?",
    content:
      "Of all the franchises in EA Sports’ stable, the recently acquired F1 series is the most fascinating.",
    user_id: 3,
  },
  {
    title: "Spurs join in “Sport for Healing Fund”",
    content:
      "Members of the Texas and national professional sports communities are joining efforts to form the “Sport for Healing Fund",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
