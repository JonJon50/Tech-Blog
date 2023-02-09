const { Post } = require('../models')

const postsData = [
    {
        title: "what a project",
        contents: "Creating work in start time is hard!",
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;
