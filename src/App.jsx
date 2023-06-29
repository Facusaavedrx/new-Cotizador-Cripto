import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'
import Resultado from './components/Resultado'


const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content:'';
    width: 50%;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App () {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargado] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargado(true)
        const { moneda, cripto } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[cripto][moneda])
        setCargado(false)
      }

      cotizarCripto()
    }
    setResultado({})
  }, [monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='Imagenes de distintas criptomonedas'
      />
      <div>
        <Heading>Cotizador de criptomonedas</Heading>

        <Formulario
          setMonedas={setMonedas}
        />

        {resultado.PRICE && <Resultado resultado={resultado} />}
        {cargando && <Spinner>Cargando</Spinner>}
      </div>
    </Contenedor>
  )
}

export default App
