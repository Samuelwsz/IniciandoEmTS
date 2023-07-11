import style from "./Botao.module.scss"

interface BotaoProps {
  children: string
  type?: "button" | "submit" | "reset"
}

export default function Botao({ children, type = "button" }: BotaoProps) {
  return (
    <button className={style.botao} type={type}>
      {children}
    </button>
  )
}
