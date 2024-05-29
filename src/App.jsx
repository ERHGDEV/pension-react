import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  const [ salarioMensual , setSalarioMensual ] = useState('')
  const [ semanasCotizadas , setSemanasCotizadas ] = useState('')
  const [ edadActual , setEdadActual ] = useState('')
  const [ estadoCivil , setEstadoCivil ] = useState('')
  const [ hijos , setHijos ] = useState('')

  const handleChangeSalarioMensual = (event) => setSalarioMensual( event.target.value )
  const handleChangeSemanasCotizadas = (event) => setSemanasCotizadas( event.target.value )
  const handleChangeEdadActual = (event) => setEdadActual( event.target.value )
  const handleChangeEstadoCivil = (event) => setEstadoCivil( event.target.value )
  const handleChangeHijos = (event) => setHijos( event.target.value )
  const handleClickCalcular = (event) => {
    event.preventDefault()
    console.log( salarioMensual, semanasCotizadas, edadActual, estadoCivil, hijos )
  }

  return (
    <>
      <Header />

      <Content 
        salarioMensual = { salarioMensual }
        handleChangeSalarioMensual = { handleChangeSalarioMensual }
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
