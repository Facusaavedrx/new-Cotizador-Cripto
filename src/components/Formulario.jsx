import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import SelectMonedas from './SelectMonedas'
import SelectCriptos from './SelectCriptos'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

function Formulario () {
  const [moneda, setMoneda] = useState('')
  const [criptos, setCriptos] = useState([])
  const [cripto, setCripto] = useState('')

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const arrayCriptos = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      setCriptos(arrayCriptos)
    }
    consultarAPI()
  }, [])

  return (
    <form>
      <SelectMonedas label='Moneda' opciones={monedas} moneda={moneda} setMoneda={setMoneda} />
      <SelectCriptos label='Criptomoneda' criptos={criptos} setCripto={setCripto} cripto={cripto} />
      <InputSubmit type='submit' value='Cotizar' />
    </form>
  )
}

export default Formulario
