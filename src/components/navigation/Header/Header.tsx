import clsx from "clsx"
import styles from "./Header.module.scss"

export const Header = () => {
  const _sitename_accent_class = clsx(styles.sitename, styles.sitename_accent)
  return (
    <header className={styles.header}>
      <span>
        <span className={styles.sitename}>Shiki</span>
        <span className={_sitename_accent_class}>Love</span>
      </span>
    </header>
  )
}
