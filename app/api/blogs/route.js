// import mongoose from "mongoose";

// import { conn } from '@/utils/db';
import { NextResponse } from "next/server";
// import { BlogModel } from "@/utils/model/blogModel";
import { BlogModel } from "@/utils/model/blogModel";
import DB_Connect from "@/utils/DB_Connect";

export async function GET (req) {
    DB_Connect();
    let data = [];
    // console.log("Database is Connecting");
    
    try {
        // await mongoose.connect(conn);
        // console.log("Database is Connected");
        data = await BlogModel.find();

    } catch (error) {
        // console.log("Database is Not Connected");
        data = {result:"error", success:false};
        return NextResponse.json({data}, {status:404});
    }
    return NextResponse.json({result:data, success:true}, {status:200})
}


export async function POST(req) {
    DB_Connect();
    try {
        const payload = await req.json();
        let blogData = new BlogModel(payload);
        // const blogData = await BlogModel.create(payload);
        const data = await blogData.save();
        return NextResponse.json({ result: data, success: true });
    } catch (err) {
        return NextResponse.json({ result: err.message, success: false });
    }
}