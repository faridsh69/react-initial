import { Button } from 'components/Button/Button'
import { VariantsEnum } from 'enums/enums'
import { useAuth } from 'hooks/useAuth'

export const ApisStory = () => {
  const { accessToken, autoLogin } = useAuth()

  return (
    <div>
      {accessToken}
      {!accessToken && (
        <Button label='Test login api' variant={VariantsEnum.Secondary} onClick={autoLogin} />
      )}
    </div>
  )
}
