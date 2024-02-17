import { useEffect } from 'react'
import { useUser } from '../context/Hooks'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const RequireProRole = ({children}) => {
  
  const { loading, isPro } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isPro) {
      navigate('/login')
    }
  }, [loading, isPro, navigate])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!isPro) {
    return <p>Unauthorized</p>
  }

  return children
}

export default RequireProRole