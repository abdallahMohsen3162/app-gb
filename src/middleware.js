import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
    

    const path = request.nextUrl.pathname;
    const token = request.cookies.get('token')?.value

    if(!token && path == "/dashboard"){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

    if(!token && path == "/home"){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

    if(token && path == "/register"){
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }
    if(token && path == "/login"){
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/home","/dashboard","/register","/login"],
}