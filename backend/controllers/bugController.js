const asyncHandler = require('express-async-handler');

const Bug = require('../models/bugModel');

// @desc    Get Bugs
// @route   GET /api/bugs
// @access  Private

const getBugs = asyncHandler(async(req, res) => {
  const bugs = await Bug.find();

  res.status(200).json(bugs);
});

// @desc    Set Bugs
// @route   POST /api/bugs
// @access  Private

const createBug = asyncHandler(async(req, res) => {
  if(!req.body){
    res.status(400);
    throw new Error('Add text field');
  }
  const bug = await Bug.create({
    title: req.body.title,
    status: req.body.status,
    description: req.body.description,
  });
  res.status(200).json(bug);
});


// @desc    Update Bugs
// @route   PUT /api/bugs/:id
// @access  Private

const updateBug = asyncHandler(async (req, res) => {
  const bug = await Bug.findById(req.params.id);

  if(!bug){
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
  })
  res.status(200).json(updateBug);
});


// @desc    Delete Bugs
// @route   DELETE /api/bugs/:id
// @access  Private

const deleteBug = asyncHandler(async(req, res) => {
  const bug = await Bug.findById(req.params.id);
  if(!bug){
    res.status(400);
    throw new Error('Goal not found');

  }

  await bug.remove();
  res.status(200).json({id: req.params.id});

});


module.exports = {
  getBugs,
  createBug,
  updateBug,
  deleteBug
}