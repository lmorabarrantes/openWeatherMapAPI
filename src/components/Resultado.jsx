import useClima from "../hooks/useClima"


const Resultado = () => {
    const {resultado, busqueda} = useClima()
    const {country} = busqueda
    const {name, main} = resultado
    const {temp, temp_min, temp_max} = main
    //grados kelvin a grados C
    const kelvin = 273.15
  return (
    <div className="contenedor">
        <h2>El Clima de {name}, {country} es:  </h2>
        <p>
            Temperatura Actual: {parseInt(temp - kelvin)} °C
        </p>
        <p>
            Temperatura Minima: {parseInt(temp_min - kelvin)} °C
        </p>
        <p>
            Temperatura Maxima : {parseInt(temp_max - kelvin)} °C
        </p>
    </div>
  )
}

export default Resultado