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

function SelectCriptos ({ label, criptos, setCripto, cripto }) {
  return (
    <>
      <Label> {label} </Label>
      <Select
        value={cripto}
        onChange={e => setCripto(e.target.value)}
      >
        <option value=''>Seleccionar: </option>
        {criptos.map(cripto => {
          return (
            <option value={cripto.id} key={cripto.id}> {cripto.nombre} </option>
          )
        })}
      </Select>
    </>
  )
}

export default SelectCriptos
