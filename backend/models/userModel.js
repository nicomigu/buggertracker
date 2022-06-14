const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Please Add Name']
  },
  email:{
    type: String,
    required: [true, 'Please Add Email Address']
  },
  password:{
    type: String,
    required: [true, 'Please Add Password']
  },
},
{
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);