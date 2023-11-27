import { Header } from "@/components/global/Header/Header"
import { Outlet } from "react-router-dom"

export const GlobalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>Footer</div>
    </>
  )
}
