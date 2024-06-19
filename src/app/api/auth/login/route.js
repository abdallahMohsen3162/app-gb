// app/api/login/route.js
import { NextResponse } from 'next/server';
import { query } from '../../../../../lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {

  try {
    const { email, password } = await req.json();
    const userResults = await query('SELECT * FROM users WHERE email = ?', [email]);
    if (userResults.length === 0) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }
    
    const user = userResults[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }
    const tokenData = {
      'id': user._id,
      'username': user.username,
      'email': user.email
    }
    
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: "1d"})

    await query('UPDATE users SET token = ? WHERE id = ?', [token, user.id]);
    
    const response = NextResponse.json({
      'message': "Login successful",
      'success': true,
      'user':user
    })
    response.cookies.set("token", token, {
        httpOnly: true, 
    })

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
