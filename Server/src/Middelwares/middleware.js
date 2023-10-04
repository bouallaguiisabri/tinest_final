const Admin = require("../Models/adminModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");


const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const admin = await Admin.findById(decoded?.id);
                req.admin = admin;
                next();
            }
        } catch (error) {
            throw new Error("not authorized token please login again");
        }
    } else {
        throw new Error("there is no token attached to header");
    }
});
const isAdmin = asyncHandler(async (req, res, next) => {
    const { email } = req.admin;
    const superAdmin = await Admin.findOne({ email });
    if (superAdmin.role !== "SuperAdmin") {
        throw new Error("You are not SuperAdmin");
    } else {
        next();
    }
})

module.exports = {authMiddleware,isAdmin};

