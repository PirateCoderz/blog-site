import DB_Connect from "@/utils/DB_Connect";
import { User } from "@/utils/model/User";
import { BlogModel } from "@/utils/model/blogModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET () {        
    try {
        DB_Connect();
        const data = await BlogModel.find();
        
    } catch (error) {
        return NextResponse.json({result:error, success: false}, {status:400});
    }

    return NextResponse.json({result:data, success: true}, {status:200});
}

export async function POST (req){
    let payload = await req.json();

}