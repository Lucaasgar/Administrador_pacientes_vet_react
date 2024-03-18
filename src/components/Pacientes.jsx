function Pacientes({paciente, setPaciente}) {
    const { nombre, propietario, email, fecha, sintomas} = paciente
    return(
        <div className="bg-white my-10 py-10 px-5 shadow-md rounded-xl">
                <p className="font-bold uppercase mb-3 text-gray-700">Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>
                
                <p className="font-bold uppercase mb-3 text-gray-700">Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold uppercase mb-3 text-gray-700">Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold uppercase mb-3 text-gray-700">Fecha Alta: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold uppercase mb-3 text-gray-700">Síntomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>

                <div className="flex justify-between mt-8 md:gap-3">
                    <button
                        className="bg-indigo-600 py-2 px-10 rounded-lg text-white font-bold uppercase hover:bg-indigo-700 transition"
                        onClick={() => setPaciente(paciente)}
                    >
                        Editar
                    </button>

                    <button
                        className="bg-red-600 py-2 px-10 rounded-lg text-white font-bold uppercase hover:bg-red-700 transition"
                    >
                        Eliminar
                    </button>
                </div>

        </div>
    )
}

export default Pacientes