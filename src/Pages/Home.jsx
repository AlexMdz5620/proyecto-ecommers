import { useState, useEffect } from "react"
import { getAllItemsService } from "@/Service/itemService"
import '@/Styles/general.css'

const Home = () => {
  // estado
  const [itemsList, setItemList] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemList(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Home', error)
      }
    }
    fetchUserData()
  }, [])

  return (
    <>
      <h1 className="text">Intento podbre de E-Commer</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {itemsList && itemsList.map((product) => (
          <div className='card m-2' style={{ width: '18rem' }} key={product.id} >
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image} alt={product.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
              <a href='#' className='btn btn-primary'>Comprar</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home