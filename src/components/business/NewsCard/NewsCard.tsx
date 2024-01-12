import { Card } from "@/components/ui/Card/Card"
import { FC } from "react"
import styles from "./NewsCard.module.scss"

interface IProps {
  image: string
  title: string
  about?: string
  tags?: string
}
// TODO: replace all img tags to Image Component
export const NewsCard: FC<IProps> = ({ image, title, about, tags }) => {
  return (
    <Card className={styles.newscard}>
      <img src={image} className={styles.image} />
      <div className={styles.rightside}>
        <span className={styles.title}>{title}</span>
        <span className={styles.about}>{about}</span>
        <div className={styles.tags}>tags</div>
      </div>
    </Card>
  )
}
