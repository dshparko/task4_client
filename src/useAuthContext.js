import { AuthContext } from './AuthContext'
import { useContext } from 'react'

const useAuthContext = () => useContext(AuthContext)

export default useAuthContext