const express = require('express');
const router = express.Router();
const { createAgence,
    getAgences,
    getAgenceById,
    updateAgenceById,
    deleteAgenceById,
    updateAgencesByAdminId,
    deleteAllAgences, } = require('../Controllers/agenceController');
const { authMiddleware } = require('../Middelwares/middleware');
const { generateToken } = require('../Config/jwt');
const authenticateToken = require('../Middelwares/tokenMiddlware');
// const authMiddleware = require('../Middleware/middleware');

// Route to create a new agence
router.post('/ajouterAgence',authMiddleware,authenticateToken,createAgence);

// Route to get all agences
router.get('/agences', getAgences);

// Route to get a specific agence by ID
router.get('/agences/:id', getAgenceById);

// Route to update a specific agence by ID
router.put('/agences/:id', updateAgenceById);

// Route to delete a specific agence by ID
router.delete('/agences/:id', deleteAgenceById);

// Route to update all agences belonging to a specific admin by admin ID
router.put('/agences/admin/:adminId', updateAgencesByAdminId);



// Route to delete all agences (Caution: Deletes all agences from the database)
router.delete('/agences', deleteAllAgences);

module.exports = router;