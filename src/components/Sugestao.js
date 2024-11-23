import { Usuario } from "./Usuario";

export const Sugestao = (props) => {
  return (
    <>
        <div className="sugestao">
          <Usuario>
            <img src={props.src} alt={props.nome} />
            <div className="texto">
              <div className="nome">{props.nome}</div>
              <div className="razao">{props.razao}</div>
            </div>
          </Usuario>
          <div className="seguir">{props.seguir}</div>
        </div>
    </>

  )
}
