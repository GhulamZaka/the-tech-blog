const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Talenti is good",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Sport team values more day by day.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "F1 is an amazing game",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "Fundraising through sport is good idea",
    user_id: 4,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
