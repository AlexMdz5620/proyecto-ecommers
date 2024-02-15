import { Routes, Route } from 'react-router-dom'
import { Home, Dashboard, Login, Secret, SignUp } from '@/Pages'
import { useAuthContext } from '@/Hook/useAuthContext'

const RoutesIndex = () => {
  const {isAuth} = useAuthContext();
  return (
    //renderizamos los componentes
    <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/dashboard'
          element={
          isAuth ?
            <Dashboard /> :
            <Login />
        } />
        <Route path='/login' element={<Login />} />
        <Route 
          path='/secret'
          element={
          isAuth?
            <Secret />:
            <Login />
          } />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default RoutesIndex