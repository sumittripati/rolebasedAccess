const Users = require('../../models/userschema');

const adminservice = async (req, res, next) => {
    try {
        const users = await Users.find().select('name email role');
        // const users = await Users.find();
        return res.status(200).json({
            message: " services Users fetched successfully",
            success: true,
            users,
        }); 
    } catch (err) {
        console.error("Error in service getAllusers controller:", err);
        err = err.message || "Internal Server Error in service getAllusers controller";
        err.status = err.status || 500;
        return next(err);
    }
}

module.exports = adminservice;