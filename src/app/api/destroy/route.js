import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function DELETE(request) {
  const { _id } = await request.json();

  try {
    const token = request.cookies.get('token').value;


    const userResult = await query('SELECT * FROM users WHERE token = ?', [token]);
    if (userResult.length === 0) {
      return NextResponse.json({ error: 'USER DOES NOT EXIST' }, { status: 404 });
    }
    const userId = userResult[0].id;

    // Récupérer la taille de l'entrée à supprimer
    const bucketResult = await query('SELECT size FROM bucket WHERE id = ? AND user_id = ?', [_id, userId]);
    if (bucketResult.length === 0) {
      return NextResponse.json({ error: 'Entrée non trouvée' }, { status: 404 });
    }
    const size = bucketResult[0].size;


    await query('UPDATE users SET storage = storage - ? WHERE id = ?', [size, userId]);
    await query('DELETE FROM bucket WHERE id = ? AND user_id = ?', [_id, userId]);

    return NextResponse.json({ message: 'deleted', size ,'storage':userResult[0].storage}, { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
