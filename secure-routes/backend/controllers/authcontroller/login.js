const User = require('../../models/userschema');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      let err = new Error("Email and password are required");
      err.status = 400;
      return next(err)
    }

    const preuser = await User.findOne({ email }).select("+password");
    if (!preuser) {
        let err = new Error("user not found");
        err.status = 400;
        return next(err)
    }

    const isMatch = await preuser.comparePassword(password);
    if (!isMatch) {
        let err = new Error("Invalid email or password authentication failed");
        err.status = 400;
        return next(err)
    }

    let token = preuser.getJwtToken();

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
    //   secure: true,
    });

    console.log("user logged in successfully");
    return res.status(200).json({ success: true, message: "User token generated successfully",token });

  } catch (err) {
    console.error("user not logged in", err);
    err = err.message || "Internal Server Error so user not logged in";
    err.status = 500;
    return next(err);
  }
};

module.exports = login;