import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'

import { TableCellWrapperProps } from '../Table.types'
import styles from '../Table.module.scss'

export const ActionCellWrapper = (props: TableCellWrapperProps) => {
  const { children, icon, onClick, disabled = false } = props

  return (
    <div
      onClick={() => (disabled ? {} : onClick?.())}
      className={clsx(
        styles.actionCellWrapper,
        disabled && styles.actionCellDisabled,
        !onClick && styles.actionCellNotClickable,
      )}
    >
      {children}
      <Icon icon={icon} />
    </div>
  )
}
