import { GlobalContext } from "@/contexts/GlobalContext"
import { useContext } from "react"

export const AnimeListPage = () => {
  const globalContext = useContext(GlobalContext)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await whoami()
  //     console.log(data)

  //     setName(data.nickname)
  //   }
  //   fetchData()
  // }, [])
  console.log(globalContext)
  return (
    <div>
      <span>Anime List Page</span>
      <span>{globalContext.isLogin ? "ok" : "not"}</span>
    </div>
  )
}
