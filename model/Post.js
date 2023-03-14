const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    }
})

module.exports = mongoose.model("Posts", PostSchema); // creating a table named Posts in the database and sending the PostSchema
