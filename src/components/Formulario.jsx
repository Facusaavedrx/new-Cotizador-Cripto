import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import SelectMonedas from '../hooks/SelectMonedas'
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

  return (
    <form>
      <SelectMonedas label='Seleccionar moneda' opciones={monedas} moneda={moneda} setMoneda={setMoneda} />
      <InputSubmit type='submit' value='Cotizar' />
    </form>
  )
}

export default Formulario
