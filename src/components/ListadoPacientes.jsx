import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes}) {
    console.log(pacientes)
    return(
        <aside className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto mx-5">
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Administra tus {''}
                <span className="font-bold text-indigo-600">Pacientes y Citas</span>
            </p>

            { pacientes.map( (paciente, index) => {
                return(
                    <Pacientes
                        key={index} 
                        paciente={paciente}   
                    />
                )
            })}

            
            
        </aside>
    )
}

export default ListadoPacientes