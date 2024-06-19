// src/app/api/hello/route.js
import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';
// const db = require('mysql');
export const GET = async (request) => {
  try {
    let e = 'aaa@gmail.com'
    const results = await query('SELECT * FROM users WHERE email = ?', [e]);
    let x = request.cookies.get('token').value;
    return NextResponse.json({ name:x},{status:200});
  } catch (error) {
    return new Response(error, { status: 500, error: error.message });  
  }
};



