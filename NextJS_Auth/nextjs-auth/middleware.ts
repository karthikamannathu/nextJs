import { NextRequest, NextResponse } from "next/server"


const isAuthenticated = true;

export function middleware(request:NextRequest){

if(isAuthenticated){
    if(["/login"].includes(request.nextUrl.pathname))
  return  NextResponse.redirect(new URL ("/dashboared",request.url))
}

if(isAuthenticated!){
    return NextResponse.next()
}

if(!isAuthenticated){
    if(["dashboared","/profile"].includes(request.nextUrl.pathname))
        return NextResponse.redirect(new URL("/login",request.url))
}
}
