import styled from '@emotion/styled'

const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`

function SelectMonedas ({ label, opciones, moneda, setMoneda }) {
  return (
    <>
      <Label> {label} </Label>
      <Select
        value={moneda}
        onChange={e => setMoneda(e.target.value)}
      >
        <option value=''>Nombre:</option>
        {opciones.map(opcion => {
          return (
            <option value={opcion.id} key={opcion.id}> {opcion.nombre} </option>
          )
        })}
      </Select>
    </>
  )
}

export default SelectMonedas
