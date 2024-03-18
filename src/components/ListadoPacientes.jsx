import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes, setPaciente}) {

    return(
        <aside className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto mx-5">
            
            {pacientes && pacientes.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Administra tus {''}
                        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
                    </p>
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Comienza agregando pacientes {''}
                        <span className="font-bold text-indigo-600">y aparecerán en este lugar</span>
                    </p>
                </>
            )}

            

            { pacientes.map( (paciente) => {
                return(
                    <Pacientes
                        key={paciente.id} 
                        paciente={paciente}  
                        setPaciente={setPaciente} 
                    />
                )
            })}
            
        </aside>
    )
}

export default ListadoPacientes