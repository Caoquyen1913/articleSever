// import bcrypt from 'bcrypt';
import userModel from './user.model';
import responseHandle from '../../utils/responseHandle';
import { HttpStatusCode } from '../../const/httpCode';

const saltRounds = 10;
const signIn = async(req, res) => {
    try {
        const { name, username, password } = req.body;
        // const hashPassword = await bcrypt.hash(password, saltRounds);
        const user = await userModel.create({
            name,
            username,
            password: password,
            isActive: true,
        });
        user.password = undefined;
        user.isActive = undefined;
        return responseHandle.send(res, HttpStatusCode.OK, {
            message: 'sign in success',
            data: user,
        });
    } catch (error) {
        return responseHandle.send(res, HttpStatusCode.INTERNAL_SERVER, {
            errors: [{
                error: error.message,
            }, ],
        });
    }
};

const getUser = async(req, res) => {
    try {
        const { name, username, wildcard } = req.query;
        let query = {};
        if (wildcard) {
            query = {
                ...query,
                $or: [{
                        name: {
                            $regex: new RegExp(
                                `(${wildcard.toString().toLowerCase()})\\w+`,
                                'i',
                            ),
                        },
                    },
                    {
                        name: {
                            $regex: new RegExp(
                                `( ${wildcard.toString().toUpperCase()} )\\w+`,
                                'i',
                            ),
                        },
                    },
                ],
            };
        }
        if (name) {
            query = {
                ...query,
                name: { $regex: new RegExp(`(${name})\\w+`, 'i') },
            };
        }

        if (username) {
            query = {
                ...query,
                username: { $regex: new RegExp(`( ${username})\\w+`, 'i') },
            };
        }

        const listUser = await userModel
            .find(query)
            .sort({ name: 1 })
            .select('-password -isActive');
        return responseHandle.send(res, HttpStatusCode.OK, {
            message: 'get user success',
            data: listUser,
        });
    } catch (error) {
        return responseHandle.send(res, HttpStatusCode.INTERNAL_SERVER, {
            errors: [{
                error: error.message,
            }, ],
        });
    }
};

export default {
    signIn,
    getUser,
};