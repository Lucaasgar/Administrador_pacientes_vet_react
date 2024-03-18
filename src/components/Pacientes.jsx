function Pacientes({paciente}) {
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
            </div>
    )
}

export default Pacientes