const db = require('./connection');
const { User, Job, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Tech' },
    { name: 'Audio'},
    { name: 'Art'}


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
    {
      name: 'Mix Your Song',
      description:
        'I will mix your audio files and have your song sounding its best.',
      category: categories[1]._id,
      price: 399.99,
      user: users[0]
    },
    {
      name: 'Master Your Song',
      description:
        'I will master your audio files and have your finshed song file sounding radio radio',
      category: categories[1]._id,
      price: 199.99,
      user: users[0]
    },
    {
      name: 'Produce a Song',
      description:
        'I will create a song to your specifications. Have music to call your own!',
      category: categories[1]._id,
      price: 999.99,
      user: users[0]
    },
    {
      name: 'Audio Branding',
      description:
        'I will create an audio tag for your social media content.',
      category: categories[1]._id,
      price: 299.99,
      user: users[0]
    },
    {
      name: 'Digital Art',
      description:
        'Will take an old photograph and give it a fresh rendered appearnce.',
      category: categories[2]._id,
      price: 199.99,
      user: users[0]
    },
    {
      name: 'Pop Art',
      description:
        'I will create pop art based on any character of your choosing.',
      category: categories[2]._id,
      price: 299.99,
      user: users[0]
    },
    {
      name: 'Illustrations',
      description:
        'I will illustrate a scene that you describe and bring memories to life.',
      category: categories[2]._id,
      price: 499.99,
      user: users[0]
    },
    {
      name: 'Photoshop',
      description:
        'I will edit an album of photos using state of the art software and features.',
      category: categories[2]._id,
      price: 299.99,
      user: users[0]
    },
    {
      name: 'Video Editing',
      description:
        'I will edit a video up to 10 minutes in length with industry standard tools.',
      category: categories[2]._id,
      price: 699.99,
      user: users[0]
    },
  ]);

  console.log('jobs seeded');
  process.exit();
});
