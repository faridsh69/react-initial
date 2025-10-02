import { useState } from 'react'
import { APP_PATHS } from 'components/0app/constants'
import { Button } from 'components/Button/Button'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { useAuth } from 'hooks/useAuth'
import { useClickOutside } from 'hooks/useClickOutside'
import { useNavigate } from 'react-router-dom'

import { NavbarProps } from './Navbar.types'
import styles from './Navbar.module.scss'

export const Navbar = (props: NavbarProps) => {
  const { options } = props

  const navigate = useNavigate()

  const [selectedOption, setSelectedOption] = useState<any>(null)

  const { accessToken, autoLogin } = useAuth()
  const handleClickPath = (path: string) => {
    if (path === APP_PATHS.home) {
      navigate(path)
      return
    }

    if (APP_PATHS.profile) {
      autoLogin()
      return
    }

    navigate(APP_PATHS.home)
  }

  const handleClose = () => {
    setSelectedOption(null)
  }

  const clickoutsideRef = useClickOutside(handleClose, !!selectedOption)

  return (
    <div className={selectedOption ? styles.overlay : ''}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Button
            iconRight={IconsEnum.Logo}
            variant={VariantsEnum.Text}
            onClick={() => handleClickPath('/')}
          />
        </div>
        <div className={styles.options}>
          {options.map((option, index) => (
            <div key={index} className={styles.option} onClick={() => setSelectedOption(option)}>
              <Button label={option.label} variant={VariantsEnum.Text} size={SizesEnum.S} />
            </div>
          ))}
        </div>
        <div className={styles.rightBar}>
          <Button
            iconLeft={IconsEnum.User}
            variant={VariantsEnum.Text}
            size={SizesEnum.M}
            onClick={() => handleClickPath(APP_PATHS.profile)}
            label={accessToken ? ' (logged in)' : ''}
          />
          <Button
            iconLeft={IconsEnum.Basket}
            variant={VariantsEnum.Text}
            size={SizesEnum.M}
            onClick={() => handleClickPath('/basket')}
          />
        </div>
        {selectedOption && (
          <div className={styles.expanded} ref={clickoutsideRef}>
            <div className={styles.categories}>
              {selectedOption?.categories?.map((category: any) => (
                <div key={category.label} className={styles.category}>
                  <Button
                    label={category.label}
                    variant={VariantsEnum.Text}
                    size={SizesEnum.S}
                    onClick={() => handleClickPath(category.path)}
                    font={FontsEnum.Header14}
                  />
                  {category.options.map((option: any) => (
                    <div className={styles.categoryLink} key={option.label}>
                      <Button
                        label={option.label}
                        variant={VariantsEnum.Text}
                        size={SizesEnum.S}
                        onClick={() => handleClickPath(category.path)}
                        font={FontsEnum.Text14}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
