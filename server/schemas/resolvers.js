const { AuthenticationError } = require("apollo-server-express");
const { User, Job, Category } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },

        job: async (parent, { jobId }, context) => {
            const job = await Job.findById(jobId)
                .populate("category")
                .populate("user");

            return job;
        },

        jobsByCategory: async (parent, { category }) => {
            if (category) {
                return await Job.find({ category })
                    .populate("category")
                    .populate("user");
            } else {
                return await Job.find().populate("category").populate("user");
            }
        },

        user: async (parent, args, context) => {
            const user = await User.findById(context.user._id);

            return user;
        },
        jobsByUser: async (parent, args, context) => {
          console.log(context.user) 
          if (context) {
                const job = await Job.find(context.user )
                    .populate("category")
                    .populate("user");
             
                return job;
            }
        },
    },
    Mutation: {
        userAdd: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        // userUpdate: async (parent, {firstName, lastName, email, password }, context) => {
        //   const user = await User.findByIdAndUpdate(context.user._id, {firstName, lastName, email, password}, { new: true });

        //   return user;
        // },

        userDelete: async (parent, args) => {
            const user = await User.findByIdAndDelete(args.id);

            return user;
        },

        jobAdd: async (parent, args, context) => {
            const job = await Job.create({ ...args, user: context.user._id });

            return job;
        },

        jobUpdate: async (parent, { id, name, description, price }) => {
            const job = await Job.findByIdAndUpdate(
                id,
                { name, description, price },
                { new: true }
            ).populate("category");

            return job;
        },

        jobDelete: async (parent, args) => {
            const job = await Job.findByIdAndDelete(args.id);

            return job;
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;
