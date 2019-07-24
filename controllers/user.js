const User = require('../models/user')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.postGenerateUser = (req, res) => {
    var salt = bcrypt.genSaltSync(10)
    var admPasswd = bcrypt.hashSync('admin123', salt)
    var usrPasswd = bcrypt.hashSync('user123', salt)

    let values = [
        {
            username: "admin",
            password: admPasswd,
            role: "admin"
        },
        {
            username: "user",
            password: usrPasswd,
            role: "user"
        }
    ]

    User
        .bulkCreate(values)
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports.postLogin = (req, res) => {
    User
        .findOne({
            where: {username : req.body.username}
        })
        .then(user => {
            if (!user){
                res.status(400).send('Username not found')
            }

            bcrypt.compare(req.body.password, user.get('password'), (err, isMatch) => {
                if(err){
                    res.status(400).send('Password Error')
                }

                if(isMatch){
                    jwt.sign({id: user.get('id'), role: user.get('role')}, process.env.SECRETKEY, (error, token) => {
                        res.json({token: token})
                    })
                } else {
                    res.status(400).send('Wrong Password')
                }
            })
        })
}