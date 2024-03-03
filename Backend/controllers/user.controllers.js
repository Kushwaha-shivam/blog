const User = require("../models/user.model.js");
const bcrypt = require("bcrypt")

const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name, email, password: hashedPassword
        });
        res.status(200).json({ success: true, user });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existedUser = await User.findOne({ email });
        if (existedUser) {
            // checking the password 
            const validatePassword = await bcrypt.compare(password, existedUser.password)
            if (validatePassword) {
                res.status(200).json({ success: true, existedUser, validatePassword });
            }
            else {
                res.status(400).json({ success: false, message: "Enter valid Credentials" })
            }
        }
        else {
            res.status(400).json({ success: false, message: "User does not exist" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}



module.exports = { userSignup, userLogin }