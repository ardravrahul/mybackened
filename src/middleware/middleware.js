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
const authorization = async function (req, res, next) {
    try {
        const token = req.headers["x-api-key"]
        if (!token) {
            return res.status(401).send({ status: false, msg: "pls provide token" })
        }
        const decoded =   jwt.verify(token, "mavrik")
        if (!decoded) {
            return res.status(403).send({ status: false, msg: "authorization failed!, Pls provide Valid token" })
        }
        next()
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }


}
module.exports = { authorization }