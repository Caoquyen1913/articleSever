import express from "express";
import mongooseConfig from "./config/mongoose.config";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "wellcome"
    });
});

app.listen(PORT, async () => {
    await mongooseConfig.mongoConnect();
    console.log("run port 5000")
})