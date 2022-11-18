// const jwt = require("jsonwebtoken")
// const authorization = async function (req, res, next) {
//     try {
//         const token = req.headers["x-api-key"]
//         if (!token) {
//             return res.status(401).send({ status: false, msg: "pls provide token" })
//         }
//         const decoded =   jwt.verify(token, "")
//         if (!decoded) {
//             return res.status(403).send({ status: false, msg: "authorization failed!, Pls provide Valid token" })
//         }
//         next()
//     }
//     catch (err) {
//         return res.status(500).send({ status: false, msg: err.message })
//     }


// }
// module.exports = { authorization }

const jwt = require("jsonwebtoken")



const authorization = function (req, res, next) {
    {
        try {
            let token = req.headers["x-api-key"];
            console.log(token);

            if (!token) {
                return res.send({ status: false, msg: "token must be present in the request header" })
            }
            let decodedToken = jwt.verify(token, "mavrik")
            console.log(decodedToken);
            if (!decodedToken) return res.status(401).send({ status: false, msg: "token is not valid" })
            req["decodedToken"] = decodedToken
            next()
        } catch (err) {
            console.log("This is the error :", err.message)
            res.status(500).send({ msg: " server Error", error: err.message })

        }
    }
}

module.exports.authorization= authorization;