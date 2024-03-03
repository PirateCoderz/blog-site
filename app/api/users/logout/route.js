import DB_Connect from "@/utils/DB_Connect";
import { NextResponse } from "next/server";

export async function GET(req) {
    DB_Connect();

    try {
        const response = NextResponse.json({
            message: "Logout Successfull",
            success: true,
        })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })

        return response;

    } catch (err) {
        const data = { result: err, message: err.message, success: false };
        return NextResponse.json(data, { status: 500 });
    }
}
