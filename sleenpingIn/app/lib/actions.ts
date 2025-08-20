'use server'

import { cookies } from "next/headers";

// Importamos cookies para guardar el usuario
// TODO: Save user id, access token, and refresh token in cookies
export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
  const cookieStore = await cookies(); // Obtenemos el store de cookies

  // Guardamos el usuario en cookies
  cookieStore.set('session_userid', userId, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  })
  cookieStore.set('session_access_token', accessToken, {
    httpOnly: true,
    maxAge: 60 * 60,
  })
  cookieStore.set('session_refresh_token', refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60
  })

}

export async function resetAuthCookies() {
  (await cookies()).set('session_userid', '');
  (await cookies()).set('session_access_token', '');
  (await cookies()).set('sesion_refresh_token', '');
}

export async function getUserId() {
  const userId = (await cookies()).get('session_userid')?.value
  return userId ? userId: null
}
