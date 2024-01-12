import { BottomNavigation } from "@/components/navigation/BottomNavigation/BottomNavigation"
import { Header } from "@/components/navigation/Header/Header"
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
