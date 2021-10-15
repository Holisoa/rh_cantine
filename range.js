module.exports = (req, res, next) => {
    res.header('Content-Range', 'collaborateurs 0-20/20')
    next()
}