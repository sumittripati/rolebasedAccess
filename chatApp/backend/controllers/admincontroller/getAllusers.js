const Users = require('../../models/userschema');

const getusers = async (req, res, next) => {
    try {
        // const users = await Users.find().select('-password');
        const users = await Users.find();
        return res.status(200).json({
            message: "Users fetched successfully",
            success: true,
            users,
        }); 
    } catch (err) {
        console.error("Error in getAllusers controller:", err);
        err = err.message || "Internal Server Error in getAllusers controller";
        err.status = err.status || 500;
        return next(err);
    }
}

module.exports = getusers;