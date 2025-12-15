const notFound = ()=> {
    return (req, res, next) => {
        res.status(404).json({ message: "Hello dear Route not found" });
    }
}

module.exports = notFound;