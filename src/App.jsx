import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import SalaryValidation from './utilities/SalaryValidation'
import WeekValidation from './utilities/WeekValidation'

function App() {

  const [ salarioMensual , setSalarioMensual ] = useState( '' )
  const [ semanasCotizadas , setSemanasCotizadas ] = useState( '' )
  const [ edadActual , setEdadActual ] = useState( '' )
  const [ estadoCivil , setEstadoCivil ] = useState( '0' )
  const [ hijos , setHijos ] = useState( '0' )
  const [ textMsjSalario , setTextMsjSalario ] = useState( '' )
  const [ textMsjSemanas , setTextMsjSemanas ] = useState( '' )
  const [ textMsjEdad , setTextMsjEdad ] = useState( '' ) 

  const handleChangeSalarioMensual = (event) => {
    const salarioMensualActualizado = event.target.value
    setSalarioMensual( salarioMensualActualizado )
    const validatedSalary = SalaryValidation(salarioMensualActualizado)
    if (!salarioMensualActualizado) {
      setTextMsjSalario( '' )
    } else {
      if ( validatedSalary ) {
        setTextMsjSalario( 'El salario promedio es menor al salario mínimo' )
      } else {
        setTextMsjSalario( '' )
      } 
    }
  }

  const handleChangeEdadActual = (event) => {
    const edadActualizada = event.target.value
    setEdadActual( edadActualizada )
    if ( edadActualizada === "" ) {
      setTextMsjEdad( '' )
    } else {
      if ( edadActualizada < 40 ) {
        setTextMsjEdad( 'El mínimo de edad admitido son 40 años' )
      } else {
        setTextMsjEdad( '' )
      }
    }
  }

  const handleChangeSemanasCotizadas = (event) => {
    const semanasCotizadasActualizado = event.target.value
    setSemanasCotizadas( semanasCotizadasActualizado )
    const semanasCotizadasTotales = WeekValidation( semanasCotizadasActualizado , edadActual )
    if ( semanasCotizadasActualizado === "" ) {
      setTextMsjSemanas( '' )
    } else {
      if ( semanasCotizadasTotales < 500 ) {
        setTextMsjSemanas( 'Se requieren mínimo 500 semanas cotizadas' )
      } else if ( semanasCotizadasTotales > 2500 ) {
        setTextMsjSemanas( 'El máximo admitido es de 2500 semanas cotizadas' )
      } else {
        setTextMsjSemanas( '' )
      }
    }
  }

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
        textMsjSemanas = { textMsjSemanas }
        edadActual = { edadActual }
        handleChangeEdadActual = { handleChangeEdadActual }
        textMsjEdad = { textMsjEdad }
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
