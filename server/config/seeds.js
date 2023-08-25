const db = require('./connection');
const { User, Car} = require('../models');

db.once('open', async () => {

  await Car.deleteMany();

  const procarsducts = await Car.insertMany([
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
    cars: [//TODO: add cars
        {
          make: "Audi",
          model: "A1",
          year: "2004",
          price: "25"
        },
    ]
  });

  await User.create({
    username: 'test2',
    email: 'test2@test.com',
    password: 'testtest'
  });

  console.log('users seeded');

  process.exit();
});
