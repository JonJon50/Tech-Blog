const { User } = require('../models');

const usersData = [
    {
        username: 'test',
        email: 'test@test.com',
        password: 'testtest'
    }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;