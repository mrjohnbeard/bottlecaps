const mongoose = require('mongoose');

require('./style');
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);