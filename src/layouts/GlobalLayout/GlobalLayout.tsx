import { BottomNavigation } from "@/components/global/BottomNavigation/BottomNavigation"
import { Header } from "@/components/global/Header/Header"
import { Outlet, ScrollRestoration } from "react-router-dom"

export const GlobalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNavigation />
      <ScrollRestoration />
    </>
  )
}
