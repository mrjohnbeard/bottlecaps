const Schema = require('mongoose').Schema;

const itemSchema = new Schema(
    
    {
    name: {},
    year: {},
    price: {},
    style: {},
    },

    { timestamps: true,}

);