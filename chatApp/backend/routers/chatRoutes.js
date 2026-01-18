const express = require("express");
const User = require("../models/userschema");
const router = express.Router();
const Message = require("../models/message");
const auth = require("../middlewares/authmiddleware");

// GET all users except admin
router.get("/chat-users", auth, async (req, res) => {
    const users = await User.find({ role: "user" }).select("name _id");
    res.json(users);
});

// GET admin user (for users to chat with)
router.get("/admin", auth, async (req, res) => {
    const admin = await User.findOne({ role: "admin" }).select("name _id");
    res.json(admin);
});

router.get('/:userId', auth, async (req, res) => {
    const adminId = req.user.id;
    const userId = req.params.userId;

    const message = await Message.find({
        $or: [
            { senderId: adminId, receiverId: userId },
            { senderId: userId, receiverId: adminId }
        ]
    }).sort({ timestamp: 1 });
    res.json({ success: true, messages: message });
})


module.exports = router;