 const { generateRefreshToken } = require("../Config/refreshToken");
 const { generateToken } = require("../Config/jwt");
 const Admin = require("../Models/adminModel");
 const asyncHandler = require("express-async-handler");
 //const jwt = require("jsonwebtoken");


 //create admin
 const createAdmin = asyncHandler(async (req, res) => {
  
   const email = req.body.email;
  
   const findAdmin = await Admin.findOne({ email: email });

   if (!findAdmin) {
   
     const newAdmin = await Admin.create(req.body);
     res.json(newAdmin);
   } else {
    
     throw new Error("Admin Already Exists");
   }
 });
 //login admin

 const loginAdmin = asyncHandler(async (req, res) => {
   const { email, password } = req.body;
   //check if admin exists or not
   const findAdmin = await Admin.findOne({ email });
   if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
     const refreshToken = await generateRefreshToken(findAdmin?._id);
     const updateadmin = await Admin.findByIdAndUpdate(
       findAdmin.id,
       {
         refreshToken: refreshToken,
       },
       { new: true }
     );
     res.cookie("refreshToken", refreshToken, {
       httpOnly: true,
       maxAge: 72 * 60 * 60 * 1000,
     });
     res.json({
      _id: findAdmin?._id,
       firstname: findAdmin?.firstname,
       lastname: findAdmin?.lastname,
       email: findAdmin?.email,
       mobile: findAdmin?.mobile,
       token: generateToken(findAdmin?._id),
     });
   } else {
     throw new Error("invalid Credentials")
   }
 });
 //superAdmin login

 const loginSuperAdmin = asyncHandler(async (req, res) => {
   const { email, password } = req.body;
   // check if admin exists or not
   const findAdmin = await Admin.findOne({ email });

   if (!findAdmin || !findAdmin.isPasswordMatched(password)) {
     throw new Error("Invalid Credentials");
   }

   if (findAdmin.role !== "SuperAdmin") {
     throw new Error("Not Authorized");
  }

   const refreshToken = await generateRefreshToken(findAdmin._id);
   const updatedAdmin = await Admin.findByIdAndUpdate(
     findAdmin._id,
     {       refreshToken: refreshToken,
     },
     { new: true }
   );

   res.cookie("refreshToken", refreshToken, {
     httpOnly: true,
     maxAge: 72 * 60 * 60 * 1000,
   });

   res.json({
     _id: findAdmin._id,
     firstname: findAdmin.firstname,
     lastname: findAdmin.lastname,
     email: findAdmin.email,
     mobile: findAdmin.mobile,
     token: generateToken(findAdmin._id),
   });
 });
/// handle refresh token

 const handleRefreshToken = asyncHandler(async (req, res) => {
   const cookie = req.cookies;
   if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
   const refreshToken = cookie.refreshToken;
   const admin = await Admin.findOne({ refreshToken });
   if (!admin) throw new Error(" No Refresh token present in db or not matched");
   jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
     if (err || user.id !== decoded.id) {
       throw new Error("There is something wrong with refresh token");
     }
     const accessToken = generateToken(admin?._id);
     res.json({ accessToken });
   });
 });
 //updateAdmin
 const updatedAdmin = asyncHandler(async (req, res) => {
   const { _id } = req.admin;
   

   try {
     const updatedAdmin = await Admin.findByIdAndUpdate(
      _id,
       {
         firstname: req?.body?.firstname,
         lastname: req?.body?.lastname,
         email: req?.body?.email,
         mobile: req?.body?.mobile,
       },
       {
         new: true,
       }
     );
     res.json(updatedAdmin);
   } catch (error) {     throw new Error(error);
   }
 });

 // get all
 const getAll = asyncHandler(async (req, res, next) => {
   try {
     const getadmin = await Admin.find();
     res.json(getadmin);
   } catch (error) {
     next(error);
  }
 });

///get one

const getOne = asyncHandler(async (req, res) => {
   const { id } = req.params;
  try {
     const getOne = await Admin.findById( id );
    res.json({
       getOne,
     })
   } catch (error) {
     throw new Error(error);
   }
 })
//  delete one
 const deleteOne = asyncHandler(async (req, res) => {
   const { id } = req.params;
   try {
     const deleteOne = await Admin.findByIdAndDelete( id );
     res.json({
       deleteOne,
    })
   } catch (error) {
     throw new Error(error);
   }
 })









 module.exports = {
   createAdmin,
   loginAdmin,
   loginSuperAdmin,
   handleRefreshToken,
   updatedAdmin,
   getAll,
   getOne,   deleteOne,
 }
