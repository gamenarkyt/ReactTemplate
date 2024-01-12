import clsx from "clsx"
import { FC, PropsWithChildren } from "react"
import styles from "./Card.module.scss"

interface IProps {
  className?: string
}
export const Card: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
}) => {
  const _class = clsx(styles.card, className)
  return <div className={_class}>{children}</div>
}
