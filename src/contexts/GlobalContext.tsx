import { createContext } from "react"

export const GlobalContext = createContext({
  theme: "dark",
  isLogin: false,
})
