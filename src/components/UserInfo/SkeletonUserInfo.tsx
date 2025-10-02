import { Skelet } from 'components/Skelet/Skelet'
import { SkeletVariants } from 'components/Skelet/Skelet.enums'

export const SkeletonUserInfo = () => {
  return <Skelet variant={SkeletVariants.List} />
}
