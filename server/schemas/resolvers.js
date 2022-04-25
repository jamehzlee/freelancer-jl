const { AuthenticationError } = require('apollo-server-express');
const { User, Job, Category } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },

    job: async (parent, { jobID }, context) => {
      const job = await Job.findById(jobID);

      return job;
    },

    jobs: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Job.find(params).populate('category').populate('user');
    },

    user: async (parent, args, context) => {
      const user = await User.findById(context.user._id);
      
      return user;
    }

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // updateUser: async (parent, {firstName, lastName, email, password }) => {
    //   const user = await User.findByIdAndUpdate(id, {firstName, lastName, email, password}, { new: true });

    //   return user;
    // },

    addJob: async (parent, args, context) => {
      const job = await Job.create({...args, user: context.user._id});

      return job;
    },

    updateJob: async (parent, { id, name, description, price }) => {
      const job = await Job.findByIdAndUpdate(id, {name, description, price}, { new: true }).populate('category');

      return job;
    },

    deleteJob: async (parent, args) => {
      const job = await Job.findByIdAndDelete(args.id);

      return job;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }
};

module.exports = resolvers;
