'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
  description: String,
  link: String,
  size: String,  // standard, mediumW, mediumT, mediumWT
  userlikes: Array,
  user: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Image', ImageSchema);