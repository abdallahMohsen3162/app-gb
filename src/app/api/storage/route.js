import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function GET(request) {
  try {
    const token = request.cookies.get('token').value;

    const userResult = await query('SELECT * FROM users WHERE token = ?', [token]);
    if (userResult.length === 0) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }
    const userstorage = userResult[0].storage;

    return NextResponse.json({ 'data': userstorage }, { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
