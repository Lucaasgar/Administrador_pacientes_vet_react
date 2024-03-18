import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  const [pacientes, setPacientes] = useState(() => {
    const pacientesFromStorage = localStorage.getItem('pacientes')
    return pacientesFromStorage ? JSON.parse(pacientesFromStorage) : []
  })
  const [paciente, setPaciente] = useState({})

  

  useEffect(() => {
    window.localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])


  const eliminarPaciente = (id) => {
    // Filtramos los pacientes por ID y retorna a todos menos al de dicho ID
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-12">
      <Header></Header>
      <div className="mt-12 md:flex">

        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>
    </div>
  )
}

export default App
