const Schema = require('mongoose').Schema;

const itemSchema = new Schema(
    
    {
    name: { type: String, required: true},
    year: { type: Number, required: true},
    price: { type: Number, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    image: { type: String},
    },

    { timestamps: true, }

);

module.exports = itemSchema;