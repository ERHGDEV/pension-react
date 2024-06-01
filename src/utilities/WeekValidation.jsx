const WeekValidation = ( semanasCotizadas , edadActual ) => {
    let semanasCotizadasTotales = 0
    let yearsTo = 0
    if ( !edadActual ) {
        semanasCotizadasTotales = 500
    } else {
        yearsTo = 60 - edadActual
        if (yearsTo <= 0) {
            semanasCotizadasTotales = semanasCotizadas
        } else {
            semanasCotizadasTotales = parseInt( semanasCotizadas ) + parseInt(( yearsTo * 52 ) )
    }
    }
    return semanasCotizadasTotales
}

export default WeekValidation