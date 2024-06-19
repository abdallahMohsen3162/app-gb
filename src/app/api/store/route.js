// src/app/api/hello/route.js
import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';
// const db = require('mysql');
export async function POST(request) {
  const { _id, url, size } = await request.json();

  try {
    const token = request.cookies.get('token').value;

    // Vérifiez si l'utilisateur existe et récupérez son ID
    const userResult = await query('SELECT * FROM users WHERE token = ?', [token]);
    if (userResult.length === 0) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }
    const userId = userResult[0].id;

    // Mettre à jour la capacité de stockage de l'utilisateur
    await query('UPDATE users SET storage = storage + ? WHERE id = ?', [size, userId]);

    // Ajouter une nouvelle entrée dans la table bucket
    await query('INSERT INTO bucket (image_url, user_id, size) VALUES (?, ?, ?)', [url, userId, size]);

    return NextResponse.json({ data: { _id, url, size } }, { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
