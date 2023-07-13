import style from "./Botao.module.scss"

interface BotaoProps {
  children: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

export default function Botao({
  children,
  type = "button",
  onClick,
}: BotaoProps) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
