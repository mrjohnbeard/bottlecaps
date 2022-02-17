const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const styleSchema = new Schema(

    {
    title: {},
    sortOrder: {},
    },

{ timestamps: true, }

);

module.exports = mongoose.model('Style', styleSchema);