const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET
const getAgenceIdFromToken = async (token) => {
    try {
        if (!token) {
            console.log('Token is required',Error);
        }

        // Verify the token and retrieve the payload
        const decodedToken = jwt.verify(token, jwtSecret);

        // Access the user ID from the decodedToken
        const userId = decodedToken.userId;

        // Find the user based on the user ID
        const user = await User.findById(userId);

        if (!user) {
            console.log('User not found',Error);
        }

        // Retrieve the agence ID from the user document
        return user.agence;
    } catch (error) {
        console.log('error',error);
    }
};

module.exports = getAgenceIdFromToken;
