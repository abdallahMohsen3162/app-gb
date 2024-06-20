// app/api/register/route.js
import { NextResponse } from 'next/server';
import { query } from '../../../../../lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;

export async function POST(req) {
  const { username, email, password } = await req.json();

  try {

    const emailCheckResults = await query('SELECT * FROM users WHERE email = ?', [email]);
    if (emailCheckResults.length > 0) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }


    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    await query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);


    const user = await query('SELECT * FROM users WHERE email = ?', [email]);
    const newUser = user[0];

    const tokenData = {
      'id': newUser._id,
      'username': newUser.username,
      'email': newUser.email
    }
    
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: "1d"})

    await query('UPDATE users SET token = ? WHERE id = ?', [token, newUser.id]);
    const response = NextResponse.json({
      'message': "Login successful",
      'success': true,
      'user':newUser
    })
    response.cookies.set("token", token, {
        httpOnly: true, 
    })

    return response;
  } catch (error) {
    console.error(error);

    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
