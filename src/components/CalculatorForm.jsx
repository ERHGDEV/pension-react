import { salarioMinimoVigente } from "../assets/Constants"

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
                    type="number"
                    placeholder="Promedio últimos 5 años"
                    min={ salarioMinimoVigente * 30 }
                />
                <div className="msj-error">
                    { props.textMsjSalario }
                </div>
            </div>

            <div>
                <label>Semanas cotizadas: </label>
                <input
                    value={ props.semanasCotizadas }
                    onChange={ props.handleChangeSemanasCotizadas }
                    type="number"
                    min="0"
                />
                <div className="msj-error">
                    Espacio para mensaje de error
                </div>
            </div>

            <div>
                <label>Edad actual: </label>
                <input
                    value={ props.edadActual }
                    onChange={ props.handleChangeEdadActual }
                    type="number"
                />
                <div className="msj-error">
                    Espacio para mensaje de error
                </div>
            </div>

            <div>
                <label>Estado civil: </label>
                <select 
                    value={ props.estadoCivil }
                    onChange={ props.handleChangeEstadoCivil }
                >
                    <option value="0">Solter@</option>
                    <option value="1">Casad@</option>
                </select>
            </div>

            <div>
                <label>Hijos: </label>
                <select
                    value={ props.hijos }
                    onChange={ props.handleChangeHijos }
                >
                    <option value="0">No</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
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