const express = require('express');
const router = express.Router();
const { getTickets, createTicket, updateTicket, deleteTicket} = require('../controllers/ticketController');

router.route('/').get(getTickets).post(createTicket);
router.route('/:id').put(updateTicket).delete(deleteTicket);


module.exports = router;