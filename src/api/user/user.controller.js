import userModel from "./user.model";
import bcrypt from "bcrypt"
const saltRounds = 10;
const signin = async (req, res, next) => {
    try {
        const { name, username, password } = req.body;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const user = await userModel.create({
            name, username, password: hashPassword, isActive: true
        })
        res.json(
            {
                data: user
            }
        )
    } catch (error) {
        return next(error)
    }
}

