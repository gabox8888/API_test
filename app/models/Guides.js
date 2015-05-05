//Guide model

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var GuideSchema = new Schema({
  name: String,
  age : Number
});

module.exports = mongoose.model('Guide', GuideSchema);
