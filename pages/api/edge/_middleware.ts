import { NextRequest, NextResponse } from "next/server";

function middleware(req: NextRequest) {
  console.log("middleware:", req.body);
  return new NextResponse("ok");
}

export default middleware;
