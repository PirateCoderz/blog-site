import { NextResponse } from "next/server";
import { BlogModel } from "@/utils/model/blogModel";
import DB_Connect from "@/utils/DB_Connect";

export async function GET (req, content) {
    DB_Connect();

    const id = content.params.blogs;
    const record = {_id:id};
    
    const result = await BlogModel.findById(record);
    // console.log(result);

    return NextResponse.json({result, success:true}, {status:200});
}

export async function PUT (req, content) {
    DB_Connect();

    const id = content.params.blogs;
    const filter = {_id:id};
    console.log(filter);

    try {
        // console.log(filter);
    const payload = await req.json();
    // console.log(payload);
    
    const result = await BlogModel.findOneAndUpdate(filter, payload);

    return NextResponse.json({result, success:true}, {status:200})
    
} catch (error) {
    return NextResponse.json({result:error, success:false}, {status:400})
    }
    
}