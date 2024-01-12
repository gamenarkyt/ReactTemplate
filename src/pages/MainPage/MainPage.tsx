import { useState } from "react"

export const MainPage = () => {
  const [name, setName] = useState<string>("test")
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await whoami()
  //     console.log(data)

  //     setName(data.nickname)
  //   }
  //   fetchData()
  // }, [])
  return (
    <div>
      <span>MainPage</span>
      <span>{name}</span>
    </div>
  )
}
