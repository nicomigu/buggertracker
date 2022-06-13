const mongoose = require('mongoose');

const bugSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please Add Title'],
  },
  status: {
    type: String,
    required: [true, 'Please Add Status'],
  },
  description:{
    type: String,
    required: [true, 'Please Add Description']
  }
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Bug', bugSchema);