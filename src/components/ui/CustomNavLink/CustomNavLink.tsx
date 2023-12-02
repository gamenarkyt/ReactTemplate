import { type FC, type PropsWithChildren } from "react"
import styles from "./CustomNavLink.module.scss"
import { NavLink, useMatch } from "react-router-dom"
import clsx from "clsx"

interface IProps {
  to: string
}
export const CustomNavLink: FC<PropsWithChildren<IProps>> = ({
  children,
  to,
}) => {
  const isMatch = useMatch(to)
  const _class = clsx(styles.root, {
    [styles.customnavlink]: isMatch === null,
    [styles.customnavlink_active]: isMatch !== null && isMatch,
  })
  return (
    <NavLink to={to} className={_class}>
      {children}
    </NavLink>
  )
}
