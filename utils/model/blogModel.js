import mongoose from "mongoose";



const imgSchema = new mongoose.Schema({
    "img_id": {type: String},
    "img_url" : {type: String}
})

const blogSchema = new mongoose.Schema({
    "heading":String,
    "content": {type:String, required: true},
    "slug": {type:String, required: true, unique: true},
    "featureImg" : {type: String, trim: true},
    "imagedata" : {type:imgSchema, required: true},
});

export const BlogModel = mongoose.models.blogs || mongoose.model("blogs", blogSchema);