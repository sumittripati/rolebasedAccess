const blog = (req,res,next) => {
    try {
        // return res.send("This is this is blog route")
        return res.status(200).json({success: true, message: "This is service route"});
    } catch (err) {
        console.error("Error in blog route:", err);
        err = err.message
        err.status = 500;
        return next(err);
    }
};

module.exports = blog;