import { Flag } from 'components/Flag/Flag'
import { Icon } from 'components/Icon/Icon'
import { ColorsEnum, CountriesEnum, IconsEnum, SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const IconsStory = () => {
  return (
    <div className={styles.story}>
      <h4>1) Icons</h4>
      <small>
        We should import svgs to project with importing its path and adding to ui-kit, with setting
        proper viewBox for it, injecting whole svg without having enum for its icon is forbidden
      </small>
      <code>{'<Icon icon={IconsEnum.ArrowRight} color={ColorsEnum.Primary} />'}</code>
      <div className={styles.noWrapStory}>
        {Object.values(IconsEnum).map(icon => (
          <div key={icon} className={styles.iconsStory}>
            <Icon icon={icon} color={ColorsEnum.SecondaryMain} size={SizesEnum.M} />
            <br />
            {icon}
          </div>
        ))}
      </div>
      <div className={styles.noWrapStory}>
        {Object.values(CountriesEnum).map(country => (
          <div key={country} className={styles.iconsStory}>
            <Flag country={country} />
          </div>
        ))}
      </div>
    </div>
  )
}
