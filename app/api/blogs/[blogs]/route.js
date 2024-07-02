import { NextResponse } from "next/server";
import { BlogModel } from "@/utils/model/blogModel";
import DB_Connect from "@/utils/DB_Connect";

export async function GET(req, content) {
    DB_Connect();

    const con = content.params.blogs;
    const result = await BlogModel.findOne({ "slug": { "$regex": con } });

    return NextResponse.json({ result, success: true }, { status: 200 });
}

export async function PUT(req, content) {
    DB_Connect();

    const id = content.params.blogs;
    const filter = { slug: id };

    try {
        const payload = await req.json();
        // console.log(payload);

        const result = await BlogModel.findOneAndUpdate(filter, payload);

        return NextResponse.json({ result, success: true }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ result: error, success: false }, { status: 400 })
    }

}

export async function DELETE(req, content) {
    DB_Connect();

    try {
        const slug = content.params.blogs;
        const record = { slug: slug };
        const data = await BlogModel.deleteOne(record);
        return NextResponse.json({ data, success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ result: error, success: false }, { status: 400 });
    }
}