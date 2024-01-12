import { CustomNavLink } from "@/components/ui/CustomNavLink/CustomNavLink"
import { ListTodo, Newspaper, UserRound } from "lucide-react"
import styles from "./BottomNavigation.module.scss"

export const BottomNavigation = () => {
  return (
    <nav className={styles.bottomnavigation}>
      <CustomNavLink to='/'>
        <Newspaper className={styles.navicon} />
      </CustomNavLink>
      <CustomNavLink to='list'>
        <ListTodo className={styles.navicon} />
      </CustomNavLink>
      <CustomNavLink to='profile'>
        <UserRound className={styles.navicon} />
      </CustomNavLink>
    </nav>
  )
}
