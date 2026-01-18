require('dotenv').config();
let app = require('./app');
let http = require('http');
const connectDB = require('./config/db');
const initSocket = require("./socket/chatSocket");
const PORT = process.env.PORT || 3000;

connectDB();

let server = http.createServer(app)

initSocket(server);

server.listen(PORT, () => {
  console.log(`Server + socket is running on port ${PORT}`);
});



