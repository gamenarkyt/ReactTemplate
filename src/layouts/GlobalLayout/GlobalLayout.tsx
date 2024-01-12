import { BottomNavigation } from "@/components/navigation/BottomNavigation/BottomNavigation"
import { Header } from "@/components/navigation/Header/Header"
import { Outlet, ScrollRestoration } from "react-router-dom"
import styles from "./GlobalLayout.module.scss"

export const GlobalLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <BottomNavigation />
      <ScrollRestoration />
    </>
  )
}
