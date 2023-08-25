const db = require('./connection');
const { User, Car} = require('../models');

db.once('open', async () => {

  await Car.deleteMany();

  const procarsducts = await Car.insertMany([
    /*TODO: add Car seeds
    Example:
        {
            make: "",
            model: "",
            year: "",
            description: "",
            price: ""
        }
    */

    {
        make: "",
        model: "",
        year: "",
        description: "",
        price: ""
    },
    {
        make: "",
        model: "",
        year: "",
        description: "",
        price: ""
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
            make: "",
            model: "",
            year: "",
            description: "",
            price: ""
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
