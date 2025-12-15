const User = require('../../models/userschema');

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      // return res.status(400).json({ success: false,  message: "All fields are required" });
      let err = new Error("All fields are required");
      err.status = 400;
      return next(err);
    }

    const preuser = await User.findOne({ email });
    if (preuser) {
        let err = new Error("User already exists");
        err.status = 400;
        return next(err);
      }

    const user = new User({ name, email, password });
    await user.save();

    console.log("user registered successfully");
    return res.status(201).json({success: true, message: "User registered successfully" });

  } catch (err) {
    console.error("user not registered", err);
    // res.status(500).json({success: false, message: "Internal error so user not registered" });
    err = err.message || "Internal Server Error so user not registered";
    err.status = 500;
    return next(err);
  }
};

module.exports = register;

