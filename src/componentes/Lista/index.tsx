import Item from "./Item"
import style from "./Lista.module.scss"

export default function Lista() {
  const Tarefas = [
    {
      id: "1",
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      id: "2",
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      id: 3,
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
  ]

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {Tarefas.map((item) => {
          return <Item key={item.id} {...item} />
        })}
      </ul>
    </aside>
  )
}
