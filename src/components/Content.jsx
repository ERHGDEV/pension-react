import CalculatorForm from "./CalculatorForm"

const Content = ( props ) => {
    return (
        <>
            <CalculatorForm 
                salarioMensual = { props.salarioMensual }
                handleChangeSalarioMensual = { props.handleChangeSalarioMensual }
                semanasCotizadas = { props.semanasCotizadas }
                handleChangeSemanasCotizadas = { props.handleChangeSemanasCotizadas }
                edadActual = { props.edadActual }
                handleChangeEdadActual = { props.handleChangeEdadActual }
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