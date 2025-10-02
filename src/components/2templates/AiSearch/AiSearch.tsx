import { APP_PATHS } from 'components/0app/constants'
import { Button } from 'components/Button/Button'
import { VariantsEnum } from 'enums/enums'
import { useChangePath } from 'hooks/useChangePath'
import { themeStyles } from 'scss/theme.styels'

export const AiSearch = () => {
  const { navigate } = useChangePath()
  return (
    <div className={themeStyles.flexRow}>

      <Button
        variant={VariantsEnum.Text}
        label={'UI KIT'}
        onClick={() => navigate(APP_PATHS.uikit)}
      />
      <Button
        variant={VariantsEnum.Text}
        label={'API library'}
        onClick={() => navigate(APP_PATHS.apis)}
      />
      <Button
        variant={VariantsEnum.Text}
        label={'Instagram'}
        onClick={() => navigate(APP_PATHS.instagram)}
      />
      <Button
        variant={VariantsEnum.Text}
        label={'Search products'}
        onClick={() => navigate(APP_PATHS.products)}
      />
      <Button
        variant={VariantsEnum.Text}
        label={'product details'}
        onClick={() => navigate(APP_PATHS.productDetails.replace(':productId', 'Farid'))}
      />
    </div>
  )
}
