import { Button } from 'components/Button/Button'
import { toastError, toastSuccess, toastWarning } from 'components/Toast/Toast'
import { IconsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ToastStory = () => {
  return (
    <div className={styles.story}>
      <h4>15) Toast </h4>
      <small>We can render messages via toast</small>
      <code>
        toastSuccess( title: Success, description: Your product added to basket successfully, )
      </code>
      <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Button
          label='Success'
          iconLeft={IconsEnum.Success}
          onClick={() =>
            toastSuccess({
              title: 'Success',
              description: 'Your product added to basket successfully',
            })
          }
        />
        <Button
          label='Warning'
          iconLeft={IconsEnum.Warning}
          onClick={() =>
            toastWarning({
              title: 'Warning',
              description: 'Your data didnt saved.',
            })
          }
        />
        <Button
          label='Danger'
          iconLeft={IconsEnum.Error}
          onClick={() =>
            toastError({
              title: 'Danger',
              description: 'Your username or password is wrong.',
            })
          }
        />
      </div>
    </div>
  )
}
