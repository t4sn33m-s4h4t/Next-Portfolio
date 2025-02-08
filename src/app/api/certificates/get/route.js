import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";  // ✅ Import Next.js Response API

export async function GET() {  // ✅ Correct function signature
  const certificatesDir = path.join(process.cwd(), "public/certificates"); 
  const imageFiles = fs.readdirSync(certificatesDir); 

  const images = imageFiles.map((file) => `/certificates/${file}`);

  return NextResponse.json({ images }, { status: 200 });  // ✅ Use NextResponse
}
