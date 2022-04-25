const db = require('./connection');
const { User, Job, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {
      name: 'Tech'
    },
  ]);
  console.log('categories seeded');

  await User.deleteMany();

  const users = await User.create([
    { 
      firstName: 'Test',
      lastName: `Lastname`,
      email: `Test@email.com`,
      password: `test123`},
  ]);
  console.log('users seeded');
  await Job.deleteMany();

  const job = await Job.insertMany([
    {
      name: 'Build a Website',
      description:
        'I will build you a website using standard coding languages',
      category: categories[0]._id,
      price: 499.99,
      user: users[0]
    },
  ]);

  console.log('products seeded');
  process.exit();
});
