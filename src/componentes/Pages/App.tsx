import style from './App.module.scss'
import Formulario from "../Formulario"
import Lista from "../Lista"

function App() {
  return (
    <>
      <div className={style.AppStyle}>
        <Formulario />
        <Lista />
      </div>
    </>
  )
}

export default App
