import './header.scss'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/Hook/useAuthContext'
import logo from '@/assets/shoppingcart.svg'
// Documentación de NavLink: https://reactrouter.com/en/main/components/nav-link
// NavLink es un tipo especial de Link, que me permite gestionar estilos en función
// de la ruta activa (isActive)

const Header = () => {
  // los tenemos en el contexto
  const { logout, isAuth } = useAuthContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }
  return (
  // bloques para BEM, COMO LLAMAR NUESTRAS CLASES
    <nav className='header'>
      <NavLink className='header__logo' to='/'>
        <img
            className='mb-4'
            src={logo}
            alt='React'
            width='72'
            height='57'
            />
      </NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
        </li>
        {/* Renderizado Condicional: https://es.react.dev/learn/conditional-rendering
            { isAuth ? (<> </>) : (<> </>) }
        */}

        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink className='header__item-link' onClick={logout}>Logout</NavLink>
              </li>
            </>
            )

          : (
            <>
              <li className='header__list-item'>
                <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Signup</NavLink>
              </li>
            </>
            )}
      </ul>
    </nav>
  )
}

export default Header