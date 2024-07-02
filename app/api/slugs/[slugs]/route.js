import { NextResponse } from "next/server";
import { BlogModel } from "@/utils/model/blogModel";
import DB_Connect from "@/utils/DB_Connect";


export async function GET (req, content) {
    DB_Connect();

    try {
        console.log(req);
        const con = content.params.slugs;
    
        const result = await BlogModel.findOne({"slug": {"$regex": con}});
        
        return NextResponse.json({result:result, success:true}, {status:200});
    } catch (error) {
        return NextResponse.json({result:"Error", success:true}, {status:200});
    }
}
