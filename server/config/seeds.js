const db = require('./connection');
const { User, Car} = require('../models');

db.once('open', async () => {

  await Car.deleteMany();

  const cars = await Car.insertMany([
    {
        make: "Audi",
        model: "A1",
        year: "2004",
        price: "25"
    },
    {
        make: "Mercedes",
        model: "Benz GLK",
        year: "2013",
        price: "50"
    }
  ]);

  console.log('Cars seeded');

  await User.deleteMany();

  await User.create({
    username: 'test',
    email: 'test@test.com',
    password: 'testtest',
    cars: [cars[0]._id]
  });

  await User.create({
    username: 'test2',
    email: 'test2@test.com',
    password: 'testtest'
  });

  console.log('users seeded');

  process.exit();
});
