import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import SalaryValidation from './utilities/SalaryValidation'

function App() {

  const [ salarioMensual , setSalarioMensual ] = useState( '' )
  const [ semanasCotizadas , setSemanasCotizadas ] = useState( '' )
  const [ edadActual , setEdadActual ] = useState( '' )
  const [ estadoCivil , setEstadoCivil ] = useState( '0' )
  const [ hijos , setHijos ] = useState( '0' )
  const [ textMsjSalario , setTextMsjSalario ] = useState( '' )

  const handleChangeSalarioMensual = (event) => {
    const salarioMensualActualizado = event.target.value
    setSalarioMensual( salarioMensualActualizado )
    const validatedSalary = SalaryValidation(salarioMensualActualizado)
    if (!salarioMensualActualizado) {
      setTextMsjSalario( '' )
    } else {
      if ( validatedSalary ) {
        setTextMsjSalario( 'El salario promedio es menor al salario mínimo.' )
      } else {
        setTextMsjSalario( '' )
      } 
    }
  }
  const handleChangeSemanasCotizadas = (event) => setSemanasCotizadas( event.target.value )
  const handleChangeEdadActual = (event) => setEdadActual( event.target.value )
  const handleChangeEstadoCivil = (event) => setEstadoCivil( event.target.value )
  const handleChangeHijos = (event) => setHijos( event.target.value )
  const handleClickCalcular = (event) => {
    event.preventDefault()
    console.log( salarioMensual, semanasCotizadas, edadActual, estadoCivil, hijos, textMsjSalario )
  }

  return (
    <>
      <Header />

      <Content 
        salarioMensual = { salarioMensual }
        handleChangeSalarioMensual = { handleChangeSalarioMensual }
        textMsjSalario = { textMsjSalario }
        semanasCotizadas = { semanasCotizadas }
        handleChangeSemanasCotizadas = { handleChangeSemanasCotizadas }
        edadActual = { edadActual }
        handleChangeEdadActual = { handleChangeEdadActual }
        estadoCivil = { estadoCivil }
        handleChangeEstadoCivil = { handleChangeEstadoCivil }
        hijos = { hijos }
        handleChangeHijos = { handleChangeHijos }
        handleClickCalcular = { handleClickCalcular }
      />

      <Footer />
    </>
  )
}

export default App
