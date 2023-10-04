
const express = require('express');
const router = express.Router();
const livreurController = require('../Controllers/livreurController');
const authenticateToken = require('../Middelwares/tokenMiddlware');

// Protected route (requires authentication)
router.get('/getLivreurColis', authenticateToken, livreurController.getLivreurColis);///

module.exports = router;
