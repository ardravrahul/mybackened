const jwt = require("jsonwebtoken")



const authentication = function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) {
            return res.status(401).send({ status: false, msg: " token must be present for authentication " })
        }
        jwt.verify(token, "mavrik", function (err, decodedToken) {
            if (err) {
                return res.status(400).send({ status: false, msg: "token invalid" });
            }

            req.decodedToken = decodedToken
            next()
        })
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




module.exports.authentication = authentication