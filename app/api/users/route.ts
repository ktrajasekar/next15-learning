import { getConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const connection = await getConnection();
        const [rows] = await connection.execute("SELECT * FROM users");
        return NextResponse.json(rows);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
