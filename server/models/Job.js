const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0.99,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
