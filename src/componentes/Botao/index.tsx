import style from "./Botao.module.scss"

interface BotaoProps{
  children:string
}

export default function Botao({ children }:BotaoProps) {
  return <button className={style.botao}>{children}</button>
}
