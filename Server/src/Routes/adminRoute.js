const express = require("express");

const { createAdmin,
    loginAdmin,
    loginSuperAdmin,
    updatedAdmin,
    getAll,
    getOne,
    deleteOne, } = require("../Controllers/adminController");
const { authMiddleware } = require("../Middelwares/middleware");

const router = express.Router();
 
router.post("/register", createAdmin);
router.post("/admin-login", loginAdmin);
router.post("/superadmin-login", loginSuperAdmin);
router.put("/update",authMiddleware, updatedAdmin);
router.get("/all-admin", getAll)
router.get("/:id",authMiddleware, getOne)
router.delete ("/:id",deleteOne)

module.exports = router; 