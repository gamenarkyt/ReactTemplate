import axios from "axios"

const _shikimoriApi = axios.create({
  baseURL: "https://shikimori.one/",
  headers: {
    "User-Agent": "ShikiLove",
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
})

interface IWhoami {
  id: number
  nickname: string
  avatar: string
  image: any
  last_online_at: string
  url: string
  name: boolean
  sex: string
  website: string
  birth_on: boolean
  full_years: number
  locale: string
}

export const shikimoriApi = {
  whoami: async () => {
    const response = await _shikimoriApi.get<IWhoami>("api/users/whoami")
    console.log(response)

    return response.data
  },
  isLogin: async () => {
    try {
      const response = await shikimoriApi.whoami()
      if (response.nickname.length) {
        return true
      }
    } catch (error) {
      console.log("Not authorized")
    }
    return false
  },
}
