const db = require('./connection');
const { User, Job, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Tech' },
    { name: 'Audio'},


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
    {
      name: 'Refactor Your Website',
      description:
        'I will refactor your website using React.',
      category: categories[0]._id,
      price: 599.99,
      user: users[0]
    },
    {
      name: 'Restyle your website',
      description:
        'I will give your website a spark with fresh and updated styling.',
      category: categories[0]._id,
      price: 299.99,
      user: users[0]
    },
    {
      name: 'Bring Your App Idea to Life',
      description:
        'After a consultation, I will develop your idea from scratch as we aim to bring your concept to light.',
      category: categories[0]._id,
      price: 2999.99,
      user: users[0]
    },
    {
      name: 'Programming Tutor',
      description:
        'I am here to help! Lets get your knowledge of coding to the next level.',
      category: categories[0]._id,
      price: 99.99,
      user: users[0]
    },
    {
      name: 'Podcast Editing',
      description:
        'I will edit your podcast episodes. Clean up your recordings while also making the finished product sound industry standard',
      category: categories[1]._id,
      price: 199.99,
      user: users[0]
    },
  ]);

  console.log('jobs seeded');
  process.exit();
});
