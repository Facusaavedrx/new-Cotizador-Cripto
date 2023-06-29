function Resultado ({ resultado }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <div>
      <p>El precio es de: <span> {PRICE} </span> </p>
      <p>El precio mas alto del dia fue: <span> {HIGHDAY} </span> </p>
      <p>El precio mas bajo del dia fue: <span> {LOWDAY} </span> </p>
      <p>Variacion de las ultimas 24 horas: <span> {CHANGEPCT24HOUR} </span> </p>
      <p>Ultima actualizacion: <span> {LASTUPDATE} </span> </p>
    </div>
  )
}

export default Resultado
