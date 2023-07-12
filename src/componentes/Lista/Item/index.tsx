import { ITarefa } from "../../types/ITarefa"
import style from "./Item.module.scss"

interface ItemProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: ItemProps) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""}`}
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          completado,
          selecionado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
