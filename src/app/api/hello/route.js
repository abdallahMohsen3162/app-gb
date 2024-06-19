// src/app/api/hello/route.js
import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

// const db = require('mysql');
export const GET = async () => {
  try {
    let e = 'abdalah3162@gmail'
    return NextResponse.json(
      { name: "results" }
    ,{status:200});
  } catch (error) {
    return new Response(error, { status: 500, error: error.message });  
  }
};







export const POST = async (req) => {
  try {
    const body = await req.json();
    return NextResponse.json({data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
};