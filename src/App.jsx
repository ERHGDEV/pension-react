import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  const [ salarioMensual , setSalarioMensual ] = useState('')
  const [ semanasCotizadas , setSemanasCotizadas ] = useState('')
  const [ edadActual , setEdadActual ] = useState('')

  const handleChangeSalarioMensual = (event) => {
    setSalarioMensual( event.target.value )
  }
  const handleChangeSemanasCotizadas = (event) => {
    setSemanasCotizadas( event.target.value )
  }

  const handleChangeEdadActual = (event) => {
    setEdadActual( event.target.value )
  }

  return (
    <>
      <Header />

      <Content 
        salarioMensual={ salarioMensual }
        handleChangeSalarioMensual = { handleChangeSalarioMensual }
        semanasCotizadas={ semanasCotizadas }
        handleChangeSemanasCotizadas = { handleChangeSemanasCotizadas }
        edadActual={ edadActual }
        handleChangeEdadActual = { handleChangeEdadActual }
      />

      <Footer />
      <>
      debug: {edadActual} 
      </>
    </>
  )
}

export default App
