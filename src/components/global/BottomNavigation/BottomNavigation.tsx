import styles from "./BottomNavigation.module.scss"
import HomeIcon from "@/assets/home.svg?react"
import LayoutIcon from "@/assets/layout.svg?react"
import { CustomNavLink } from "@/components/ui/CustomNavLink/CustomNavLink"

export const BottomNavigation = () => {
  return (
    <nav className={styles.bottomnavigation}>
      <CustomNavLink to='/'>
        <HomeIcon className={styles.navicon} />
      </CustomNavLink>
      <CustomNavLink to='/second'>
        <LayoutIcon className={styles.navicon} />
      </CustomNavLink>
    </nav>
  )
}
