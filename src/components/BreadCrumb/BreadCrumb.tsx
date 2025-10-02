import { useNavigate } from 'react-router-dom'

import { BreadCrumbProps } from './BreadCrumb.types'
import styles from './BreadCrumb.module.scss'

export const BreadCrumb = (props: BreadCrumbProps) => {
  const { options = [] } = props

  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      {options.map(option => {
        const { label, path } = option

        return (
          <a key={path} onClick={() => navigate(path)} className={styles.link}>
            {label}
          </a>
        )
      })}
    </div>
  )
}
