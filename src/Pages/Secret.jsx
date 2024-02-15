import { useAuthContext } from '@/Hook/useAuthContext'

const Secret = () => {
  //Lo usamos porque tien el token decodificado
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Mensaje de bienvenida</h1>
      {
        userPayload?.role === 'ADMIN'
          ? <h2>Hola Admin</h2>
          : <h2>Hola Costumer</h2>
      }
      {userPayload?.role === 'ADMIN' && <h2>Saludos Admin</h2>}
      {userPayload?.role === 'CUSTOMER' && <h2>Saludos Costumer</h2>}
    </>
  )
}

export default Secret