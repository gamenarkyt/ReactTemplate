import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.sitename}>SiteName</span>
    </header>
  )
}
