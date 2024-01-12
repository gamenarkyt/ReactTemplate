import { CONSTS } from "@/consts/consts"
import { GlobalContext } from "@/contexts/GlobalContext"
import { getAuthToken } from "@/services/shikimoriAuth"
import { saveTokens } from "@/utils/saveTokens"
import { useContext, useLayoutEffect } from "react"
import { useSearchParams } from "react-router-dom"

export const LoginPage = () => {
  const [searchParams] = useSearchParams()
  const authorizationCode = searchParams.get("code")
  const globalContext = useContext(GlobalContext)
  useLayoutEffect(() => {
    // fetch if code parameter in url
    const fetchAccessToken = async () => {
      if (authorizationCode && authorizationCode.length >= 3) {
        const tokens = await getAuthToken(authorizationCode)
        if (tokens) {
          saveTokens(tokens)
          console.log("Login success")
          window.open(CONSTS.URL, "_self")
        }
      }
    }
    fetchAccessToken()
  }, [])
  const onLoginClickHandler = () => {
    window.open(CONSTS.OAUTH_URL, "_self")
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>login page</span>
      {globalContext.isLogin ? <span>logined</span> : <span>not logined</span>}
      <button onClick={onLoginClickHandler}>login with shikimori</button>
    </div>
  )
}
