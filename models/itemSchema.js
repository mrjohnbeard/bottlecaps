const Schema = require('mongoose').Schema;
require('./style');

const itemSchema = new Schema(
    
    {
    name: { type: String, required: true},
    year: { type: Number, required: true},
    price: { type: Number, required: true},
    style: { type: Schema.Types.ObjectId, ref: 'Style' },
    image: { String },
    },

    { timestamps: true,}

);