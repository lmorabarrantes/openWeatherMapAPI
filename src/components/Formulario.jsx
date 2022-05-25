import useClima from "../hooks/useClima"
import { useState } from "react"

const Formulario = () => {
    const {busqueda, datosBusqueda, consultarClima} = useClima()

    const{city, country} = busqueda

    const [alerta, setAlerta] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (Object.values(busqueda).includes("")) {
            setAlerta("Debe Rellenar Todo el Formulario")
            return
        }
        setAlerta("")
        consultarClima(busqueda)
    }
  return (
    <div className='contenedor'>
        {alerta && <p>{alerta}</p>}
        <form
            onSubmit={handleSubmit}
        >
            <div className='campo'>
                <label htmlFor='city'>CIUDAD</label>
                <input 
                    type="text" 
                    id='city' 
                    name="city"
                    onChange={datosBusqueda} 
                    value={city}
                 />
            </div>
            <div className='campo'>
                <label htmlFor='country'>Country</label>
                <select
                    name="country" 
                    id="country"
                    onChange={datosBusqueda}
                    value={country}
                >

                    <option value="">Seleciones un pais</option>
                    <option value="US">USA</option>
                    <option value="CR">Costa Rica</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                </select>
            </div>

            <input type="submit" value="Consultar Clima" />
            
        </form>
    </div>
  )
}

export default Formulario