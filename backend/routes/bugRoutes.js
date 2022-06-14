const express = require('express');
const router = express.Router();
const { getBugs, createBug, updateBug, deleteBug} = require('../controllers/bugController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getBugs).post(protect, createBug);
router.route('/:id').put(protect, updateBug).delete(protect, deleteBug);


module.exports = router;