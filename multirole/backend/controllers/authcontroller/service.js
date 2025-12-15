// const service = (req,res,next) => {
//     try {
//         // return res.send("This is this is service route")
//         // return res.status(200).json({success: true, message: "This is service route", user : req.user});
//     } catch (err) {
//         console.error("Error in service route:", err);
//         err = err.message
//         err.status = 500;
//         return next(err);
//     }
// };

// module.exports = service;

const service = (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: "This is service route",
      user: req.user, // optional
    });
  } catch (error) {
    const err = new Error("Internal Server Error");
    err.status = 500;
    return next(err);
  }
};

module.exports = service;
