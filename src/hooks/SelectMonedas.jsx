import styled from '@emotion/styled'

const Label = styled.label`
  color: #FFF;
`
function SelectMonedas ({ label, opciones }) {
  return (
    <>
      <Label> {label} </Label>
      <select>
        <option value=''>Nombre:</option>
        {opciones.map(opcion => {
          return (
            <option value={opcion.id} key={opcion.id}> {opcion.nombre} </option>
          )
        })}
      </select>
    </>
  )
}

export default SelectMonedas
