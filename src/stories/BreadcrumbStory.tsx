import { BreadCrumb } from 'components/BreadCrumb/BreadCrumb'

import styles from './Story.module.scss'

export const BreadcrumbStory = () => {
  return (
    <div className={styles.story}>
      <h4>14) BreadCrumb</h4>
      <small>BreadCrumb is for showing paths</small>
      <code>{'<BreadCrumb options={[{path: "/activity", label: 1}]}  />'}</code>

      <BreadCrumb
        options={[
          {
            label: 'Home',
            path: '/',
          },
          {
            label: 'Uikit',
            path: '/uikit',
          },
          {
            label: 'Api library',
            path: '/api',
          },
        ]}
      />
    </div>
  )
}
