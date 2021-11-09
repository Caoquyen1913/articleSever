import mongoose, { Schema, model } from "mongoose";


const articleSchema = new Schema({
    title: {
        type: String,
        text: true,
    },
    published: {
        type: Boolean
    },
    body_markdown: {
        type: String
    },
    tags: {
        type: [String]
    },
    series: {
        type: String
    },
    main_image: {
        type: String
    },
    canonical_url: {
        type: String
    },
    description: {
        type: String
    },
    like: {
        type: Number,
        min: 0
    }
    // organization_id: {
    //     type: Number
    // }
},
    {
        timestamps: true
    }
);
articleSchema.index({
    title: 'text',
});
export default model("article", articleSchema);