import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const mongoConnect = async() => {
    try {
        const url = "mongodb://root:abc123@localhost:27017/article"
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            dbName: "article"
                // useFindAndModify: false,
                // useCreateIndex: true,
                // user: process.env.USER,
                // pass: process.env.PASS,
        });
        if (connect) {
            console.log("connect mongo");
        } else {
            console.log("connect mongo fail");
        }
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

export default {
    mongoConnect,
};