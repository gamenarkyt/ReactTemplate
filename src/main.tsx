import { router } from "@/pages"
import { shikimoriApi } from "@/services/shikimoriApi"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import "./styles/styles.scss"
import { GlobalContext } from "@/contexts/GlobalContext"

const GlobalValue = {
  theme: "dark",
  user: {},
  isLogin: await shikimoriApi.isLogin(),
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <GlobalContext.Provider value={GlobalValue}>
    <RouterProvider router={router} />
  </GlobalContext.Provider>,
  // </React.StrictMode>,
)
