const asyncHandler = require('express-async-handler');
// @desc    Get Tickets
// @route   GET /api/tickets
// @access  Private

const getTickets = asyncHandler(async(req, res) => {
  res.status(200).json({message: 'Get tickets'});
});

// @desc    Set Tickets
// @route   POST /api/tickets
// @access  Private

const createTicket = asyncHandler(async(req, res) => {
  if(!req.body.text){
    res.status(400);
    throw new Error('Add text field');
  }
  res.status(200).json({message: 'set tickets'});
});


// @desc    Update Tickets
// @route   PUT /api/tickets/:id
// @access  Private

const updateTicket = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update ticket ${req.params.id}`});
});


// @desc    Delete Tickets
// @route   DELETE /api/tickets/:id
// @access  Private

const deleteTicket = asyncHandler(async(req, res) => {
  res.status(200).json({message: `Delete ticket ${req.params.id}`});
});


module.exports = {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket
}