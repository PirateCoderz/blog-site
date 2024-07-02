import { NextResponse } from "next/server";
import { BlogModel } from "@/utils/model/blogModel";
import DB_Connect from "@/utils/DB_Connect";

export async function GET (req) {
    DB_Connect();
    let data = [];
    
    try {
        data = await BlogModel.find();
    } catch (err) {
        data = {result:"error", error: err.message, success:false};
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
        const data = await blogData.deleteOne();
        return NextResponse.json({ result: data, success: true });
    } catch (err) {
        return NextResponse.json({ result: err.message, success: false });
    }
}