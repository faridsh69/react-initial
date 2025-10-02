import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum } from 'enums/enums'

import { NewsCardProps } from './NewsCard.types'
import styles from './NewsCard.module.scss'

export const NewsCard = (props: NewsCardProps) => {
  const { news } = props

  return (
    <div className={styles.newsCard}>
      <Image src={news.src} alt={news.title} width={290} height={250} />
      <Label label={news.title} font={FontsEnum.Label20} linesCount={2} />
      <div className={styles.text}>
        <Label
          label={news.created_at}
          font={FontsEnum.Text16}
          color={ColorsEnum.Grey700}
          linesCount={2}
        />
        <Label
          label={news.duration}
          font={FontsEnum.Text16}
          color={ColorsEnum.Grey700}
          linesCount={2}
        />
      </div>
    </div>
  )
}
