const jwt = require('jsonwebtoken');
const verifyToken = async (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_KEY, (err) => {
            if (err) {
                return res.status(500).send({ message: err.message })
            }
            next()
        })
    } else {
        res.status(401).send({
            message: 'Token required'
        })
    }
}

module.exports = { verifyToken }