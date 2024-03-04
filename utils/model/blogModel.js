import mongoose from "mongoose";



const imgSchema = new mongoose.Schema({
    "img_id": {type: String},
    "img_url" : {type: String}

})

const blogSchema = new mongoose.Schema({
    "heading":{type:String},
    "content": {type:String, reqire: true},
    "slug": {type:String, reqire: true, unique: true},
    "featureImg" : {type: String, trim: true},
    "imagedata" : {type:imgSchema, require: true},
})

export const BlogModel = mongoose.models.blogs || mongoose.model("blogs", blogSchema);