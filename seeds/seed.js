// make sure this is the right path config
const sequelize = require('../config/connection');
const seedUsers = require('./users');
// const seedComments = require('./comments');
const seedPosts = require('./posts')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    // await seedComments();
    await seedPosts();
    process.exit(0);
};

seedAll();
