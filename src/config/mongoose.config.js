import mongoose from "mongoose";

const mongoConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if (connect) {
            console.log("connect mongo")
        }
        else {
            console.log("connect mongo fail")
        }
    } catch (error) {
        console.log(error)
        process.exit();
    }
}

export default {
    mongoConnect
}