import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function GET(request) {
  try {
    const token = request.cookies.get('token').value;
    if(!token){
      return NextResponse.json({ data: false }, { status: 200 });
    }
    const userResult = await query('SELECT * FROM users WHERE token = ?', [token]);
    if (userResult.length === 0) {
      return NextResponse.json({ data: false}, { status: 200 });
    }
    return NextResponse.json({ data: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: false }, { status: 200 });
  }
}
