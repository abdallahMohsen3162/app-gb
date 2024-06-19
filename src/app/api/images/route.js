import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function GET(request) {
  try {
    const token = request.cookies.get('token').value;

    const userResult = await query('SELECT * FROM users WHERE token = ?', [token]);
    if (userResult.length === 0) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }
    const userId = userResult[0].id;

    const images = await query('SELECT * FROM bucket WHERE user_id = ? AND type = ?', [userId, 'image']);

    return NextResponse.json({ data: images }, { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
