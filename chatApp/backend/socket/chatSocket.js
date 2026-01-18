let { Server } = require('socket.io');
const chatMiddleware = require("../middlewares/socketAuth.middleware");
let Message = require("../models/message");

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST"],
      credentials: true
    }
  })


  io.use(chatMiddleware);

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.userId}`);

    socket.join(socket.userId);

    socket.on("sendMessage", async ({ receiverId, message }) => {
      let msg
      try {
        msg = await Message.create({
          senderId: socket.userId,
          receiverId,
          text: message
        })
      } catch (error) {
        console.error("Error saving message:", error);
        // res.json({ success: false, message: "Failed to send message" }); // socket doesn't have res
      }
      io.to(receiverId).emit("receiveMessage", msg);
      io.to(socket.userId).emit("receiveMessage", msg);
    })

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.userId}`);
    });
  })
}