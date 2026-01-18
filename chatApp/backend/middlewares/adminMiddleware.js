const adminMiddleware = (req, res, next) => {
    if(req.user.role !== 'admin') {
        let err = new Error("Access denied, admin only route");
        err.status = 403;
        return next(err);
    }
    next();
}

module.exports = adminMiddleware;