const jwt = require("jsonwebtoken");
const { Socket } = require("socket.io");

let chatMiddleware = async (Socket, next)=>{
    const token = await Socket.handshake.auth.token;
    if(!token){
        return next(new Error("Authentication error"));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        Socket.userId = decoded.id;
        next(); 
    } catch (error) {
        console.error("Socket authentication error:", error);
        return next(new Error("Authentication error in chat middleware"));
    }
}
module.exports = chatMiddleware;