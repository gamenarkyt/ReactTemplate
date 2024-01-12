import { NewsCard } from "@/components/business/NewsCard/NewsCard"
import { useState } from "react"

export const MainPage = () => {
  const [name] = useState<string>("test")
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
      <NewsCard
        image='/public/news1.jpg'
        title='С Новым Годом! 2024 ceregegegjkhhkuhgyygkghiu'
        about='С Новым годом вас, дорогие пользователи Шикимори!:hurray:'
      />
    </div>
  )
}
