import CalculatorForm from "./CalculatorForm"

const Content = ( props ) => {
    return (
        <>
            <CalculatorForm 
                salarioMensual = { props.salarioMensual }
                handleChangeSalarioMensual = { props.handleChangeSalarioMensual }
                textMsjSalario = { props.textMsjSalario }
                semanasCotizadas = { props.semanasCotizadas }
                handleChangeSemanasCotizadas = { props.handleChangeSemanasCotizadas }
                textMsjSemanas = { props.textMsjSemanas }
                edadActual = { props.edadActual }
                handleChangeEdadActual = { props.handleChangeEdadActual }
                textMsjEdad = { props.textMsjEdad }
                estadoCivil = { props.estadoCivil }
                handleChangeEstadoCivil = { props.handleChangeEstadoCivil }
                hijos = { props.hijos }
                handleChangeHijos = { props.handleChangeHijos }
                handleClickCalcular = { props.handleClickCalcular }
            /> 
        </>
    )
}

export default Content