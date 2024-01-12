import axios from "axios"

export const shikimoriAuth = axios.create({
  baseURL: "https://shikimori.one/",
  headers: {
    "User-Agent": "ShikiLove",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

export interface IAuthTokens {
  access_token: string
  refresh_token: string
}

export const getAuthToken = async (
  authorizationCode: string,
): Promise<IAuthTokens | undefined> => {
  let response

  try {
    response = await shikimoriAuth.post<IAuthTokens>("oauth/token", {
      grant_type: "authorization_code",
      client_id: "C0cTq8ZDkHvhldEsKgxlCXam--xNTC0nk6db3EsFozI",
      client_secret: "nrISbmULxj2wA6sb0645-bvJwjwrUTUMyr3ZAiKso9U",
      code: String(authorizationCode),
      redirect_uri: "http://localhost:5173/login/",
    })
  } catch (error) {
    console.log("Error while login", error)
  }

  if (response) {
    return {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
    }
  }
  return undefined
}
