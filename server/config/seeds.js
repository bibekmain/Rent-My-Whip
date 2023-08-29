const db = require('./connection');
const { User, Car} = require('../models');

db.once('open', async () => {

  await Car.deleteMany();

  const cars = await Car.insertMany([
    {
        make: "Audi",
        model: "A1",
        year: "2004",
        price: "45",
        doors: 5,
        ac: true,
        transmission: "manual",
        fuel: "diesel"
    },
    {
        make: "Volkswagen",
        model: "Golf 6",
        year: "2013",
        price: "37",
        doors: 4,
        ac: true,
        transmission: "manual",
        fuel: "gasoline"
    },
    {
      make: "Toyota",
      model: "Camry",
      year: "2012",
      price: "30",
      doors: 4,
      ac: true,
      transmission: "automatic",
      fuel: "gasoline"
    },
    {
      make: "BMW",
      model: "320 ModernLine",
      year: "2015",
      price: "35",
      doors: 2,
      ac: true,
      transmission: "manual",
      fuel: "gasoline"
    },
    {
      make: "Mercedes",
      model: "Benz",
      year: "2015",
      price: "50",
      doors: 4,
      ac: true,
      transmission: "automatic",
      fuel: "gasoline"
    },
    {
      make: "Volkswagen",
      model: "Passat",
      year: "2011",
      price: "25",
      doors: 4,
      ac: true,
      transmission: "manual",
      fuel: "diesel"
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
    username: 'john',
    email: 'john@john.com',
    password: 'johnjohn'
  });

  console.log('Users seeded');

  process.exit();
});
