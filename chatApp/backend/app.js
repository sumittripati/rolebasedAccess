const express = require('express');
const app = express();
const { Server } = require("socket.io");
const cors = require('cors');
const authrouter = require('./routers/authroute');
const notFoundRouter = require('./middlewares/notfound');
const errorMiddleware = require('./middlewares/errormiddleware');
const chatRoutes = require('./routers/chatRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

// routes
app.use('/api/auth', authrouter);
app.use('/api', chatRoutes);

app.get('/api', (req, res) => {
    res.status(200).json({ message: "hello world" });
});

app.use(notFoundRouter)
app.use(errorMiddleware)

module.exports = app;




// const express = require('express')
// const app = express()
// // var cors = require('cors')
// // const passport = require('passport')
// // const session = require('express-session')
// // const authRouter = require('./Routers/authRoutes')
// // const loger = require('./Middleware/loger')
// // const notFoundRouter = require('./Middleware/notFound')
// // const errorMiddleware = require('./Middleware/errorMiddleware')
// // const protectRoute = require('./Routers/protectedRoutes')
// // const curdRouter = require('./Routers/curdRouter/curdRoutes')

// // app.use(express.json())
// // app.use(loger)
// // app.use(cors({
// //   origin: process.env.FRONTEND_URL,
// //   credentials: true
// // }));

// // app.use(session({
// //   secret: 'mysecret',
// //   resave: false,
// //   saveUninitialized: true,
// //   cookie: {
// //     secure: false,
// //     httpOnly: true
// //     }
// // }));

// // app.use(passport.initialize());
// // app.use(passport.session());

// // app.use('/curd', curdRouter)
// // app.use('/api', authRouter)
// // app.use('/buy', protectRoute)

// app.get('/', (req, res) => {
//     res.status(200).json({ message: "hello world" })
// })

// // app.use(notFoundRouter)
// // app.use(errorMiddleware)

// module.exports = app