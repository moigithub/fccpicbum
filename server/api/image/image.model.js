'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
  description: String,
  link: String,
  userlikes: Array,
  userid: { type:Schema.ObjectId, ref:"User"}
});

module.exports = mongoose.model('Image', ImageSchema);