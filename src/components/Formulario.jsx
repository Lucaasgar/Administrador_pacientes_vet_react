import { useEffect, useState } from "react"

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect( () => {
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    
    const generarId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // VALIDAR FORMULARIO
        if( [nombre, propietario, email, fecha, sintomas].includes('') ) {
            console.log('Hay un campo vacio.');

            setError(true)
            return
        }

        setError(false)

        // CREAMOS EL OBJ DE PACIENTE (NUEVO PACIENTE)

        const objPaciente = {
            nombre,
            propietario, 
            email, 
            fecha,
            sintomas,
        }

        if(paciente.id){
            // Actualizar paciente

            objPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( (pacienteStatus) => {
               return paciente.id === pacienteStatus.id ? objPaciente : pacienteStatus
            })

            setPacientes(pacientesActualizados)
            
            // Limpiamos el objeto Paciente 
            setPaciente({})
        
        } else{
            // Creamos un nuevo paciente
            
            // AGREGAMOS EL PACIENTE CON EL SPREED METHOD PARA NO MUTAR EL ARRAY ORIGINAL
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente])
        }

        // LIMPIAMOS EL FORMULARIO (RESETEAMOS EL VALOR DE "VALUE")

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="font-bold text-indigo-600">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-7" onSubmit={handleSubmit}>

                { error && (
                    <div className="bg-red-800 text-white font-bold p-3 text-center mb-3 rounded-md uppercase">
                        <p>Todos los campos son obligatorios</p>
                    </div>

                )}

                <div className="mb-5">
                    <label htmlFor="nombreMascota" className="block font-bold uppercase">Nombre Mascota:</label>

                    <input 
                        id="nombreMascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="w-full p-2 border-2 placeholder:text-gray-400"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="nombrePropietario" className="block font-bold uppercase">Nombre Propietario:</label>

                    <input 
                        id="nombrePropietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="w-full p-2 border-2 placeholder:text-gray-400"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block font-bold uppercase">Email:</label>

                    <input 
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        className="w-full p-2 border-2 placeholder:text-gray-400"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block font-bold uppercase">Alta:</label>

                    <input 
                        id="alta"
                        type="date"
                        className="w-full p-2 border-2 placeholder:text-gray-400"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block font-bold uppercase">Síntomas:</label>

                    <textarea 
                        id="sintomas" 
                        className="w-full p-2 border-2 placeholder:text-gray-400 resize-none"
                        placeholder="Describa los Síntomas..."
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input 
                    type="submit"
                    className="w-full bg-indigo-600 p-3 font-bold uppercase text-white cursor-pointer hover:bg-indigo-700 transition-colors rounded-md" 
                    value={ paciente.sintomas ? 'Editar paciente' : 'Agregar paciente'}
                />
            </form>
        </div>
    )
}

export default Formulario 