import { clsx } from 'clsx'
import { ContextMenu } from 'components/ContextMenu/ContextMenu'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ZINDEXES } from 'constants/constants'
import { IconsEnum, PlacementsEnum } from 'enums/enums'

import { FileCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const FileCell = (props: FileCellProps) => {
  const { documents = [], onViewClicked, onDownloadClicked } = props

  const options = [
    {
      icon: IconsEnum.View,
      label: 'view',
      onClick: onViewClicked,
    },
    {
      icon: IconsEnum.ArrowDown,
      label: 'download',
      onClick: onDownloadClicked,
    },
  ]

  const noDoc = !documents.length
  const oneDoc = documents.length === 1
  const multiDoc = documents.length > 1

  return (
    <ContextMenu
      triggerNode={
        <div className={clsx(styles.custom, styles.fileCellWrapper)}>
          {noDoc && (
            <>
              <Icon icon={IconsEnum.Dots} />
              <Label label={'no file uploaded'} />
            </>
          )}

          {oneDoc && (
            <>
              <Label label={documents[0].name} />
            </>
          )}

          {multiDoc && (
            <>
              <Icon icon={IconsEnum.Dots} className='noFileIcon' />
              <Label label={`${documents.length} ${'files'}`} />
            </>
          )}
        </div>
      }
      options={options}
      width={200}
      zIndex={ZINDEXES.contextMenu}
      offset={12}
      placement={PlacementsEnum.BottomStart}
    />
  )
}
