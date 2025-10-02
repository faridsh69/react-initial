import { clsx } from 'clsx'
import { DirectionsEnum } from 'enums/enums'

import { TabItemsProps } from './TabItems.types'
import styles from './TabItems.module.scss'

export const TabItems = (props: TabItemsProps) => {
  const { options = [], onChange, value, direction = DirectionsEnum.Horizontal, title = '' } = props

  return (
    <div className={clsx(styles.wrapper, styles[direction])}>
      {direction === DirectionsEnum.Vertical && !!title && (
        <div className={styles.title}>{title}</div>
      )}
      {options.map(option => {
        const { label, value: optionValue, icon, disabled, badge } = option

        return (
          <div
            key={optionValue}
            onClick={() => onChange?.(optionValue)}
            className={clsx(
              styles.tabItem,
              value === optionValue && styles.active,
              disabled && styles.disabled,
            )}
          >
            {icon && icon}
            {label}
            {!!badge && <div className={styles.badge}>{badge}</div>}
          </div>
        )
      })}
    </div>
  )
}
