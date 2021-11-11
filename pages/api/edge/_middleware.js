import { NextResponse } from "next/server";

function middleware(req) {
  console.log(req.body);
  return new NextResponse("response from middleware");
}

export default middleware;
