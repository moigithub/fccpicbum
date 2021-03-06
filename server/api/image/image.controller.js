'use strict';

var _ = require('lodash');
var Image = require('./image.model');

// Get list of images
exports.index = function(req, res) {
  Image
    .find()
    .populate( {path:'user', select: 'name'})
    .exec(function (err, images) {
      if(err) { return handleError(res, err); }
  //    console.log(images[0]);
      return res.status(200).json(images);
  });
};


// Get a all user images
exports.userImages = function(req, res) {
  Image.find({user:req.params.id}, function (err, image) {
    if(err) { return handleError(res, err); }
    if(!image) { return res.status(404).send('Not Found'); }
    return res.json(image);
  });
};

// Get a single image
exports.show = function(req, res) {
  Image.findById(req.params.id, function (err, image) {
    if(err) { return handleError(res, err); }
    if(!image) { return res.status(404).send('Not Found'); }
    return res.json(image);
  });
};

// Creates a new image in the DB.
exports.create = function(req, res) {
  Image.create(req.body, function(err, image) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(image);
  });
};

// Updates an existing image in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Image.findById(req.params.id, function (err, image) {
    if (err) { return handleError(res, err); }
    if(!image) { return res.status(404).send('Not Found'); }
    var updated = _.extend(image, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(image);
    });
  });
};

// Deletes a image from the DB.
exports.destroy = function(req, res) {
  Image.findById(req.params.id, function (err, image) {
    if(err) { return handleError(res, err); }
    if(!image) { return res.status(404).send('Not Found'); }
    image.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send("Deleted");
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}