const CalculatorForm = ( props ) => {
    return (
        <>
        <h3>Ingresa los siguientes datos:</h3>
        <form>
            <div>
                <label>Salario mensual: </label>
                <input
                    value={ props.salarioMensual }
                    onChange={ props.handleChangeSalarioMensual }
                />
                <div>
                    Espacio para mensaje de error
                </div>
            </div>

            <div>
                <label>Semanas cotizadas: </label>
                <input
                    value={ props.semanasCotizadas }
                    onChange={ props.handleChangeSemanasCotizadas }
                />
                <div>
                    Espacio para mensaje de error
                </div>
            </div>

            <div>
                <label>Edad actual: </label>
                <input
                    value={ props.edadActual }
                    onChange={ props.handleChangeEdadActual }
                />
                <div>
                    Espacio para mensaje de error
                </div>
            </div>

            <div>
                <label>Estado civil: </label>
                <input
                    value={ props.estadoCivil }
                    onChange={ props.handleChangeEstadoCivil }
                />
                <div>
                    Espacio para mensaje de error
                </div>
            </div>

            <div>
                <label>Hijos: </label>
                <input
                    value={ props.hijos }
                    onChange={ props.handleChangeHijos }
                />
                <div>
                    Espacio para mensaje de error
                </div>
            </div>

            <div>
                <button onClick={props.handleClickCalcular}>
                    Calcular
                </button>
            </div>
        </form>
        </>
    )
}

export default CalculatorForm 