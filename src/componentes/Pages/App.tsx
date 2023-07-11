import style from "./App.module.scss"
import Formulario from "../Formulario"
import Lista from "../Lista"
import Cronometro from "../Cronometro"
import { useState } from "react"
import { ITarefa } from "../types/ITarefa"

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    )
  }

  return (
    <>
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
        <Cronometro />
      </div>
    </>
  )
}

export default App
