import { salarioMinimoVigente } from "../assets/Constants"

const SalaryValidation = ( salarioMensual ) => {
    if ( salarioMensual < ( salarioMinimoVigente * 30 )) {
        return true
    } else {
        return false
    }
}

export default SalaryValidation