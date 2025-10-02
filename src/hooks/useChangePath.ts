import { useNavigate } from 'react-router-dom'

export const useChangePath = () => {
  const navigate = useNavigate()

  return { navigate }
}
