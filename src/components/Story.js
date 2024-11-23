import { Usuario } from "./Usuario"

export const Story = (props) => {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.src} alt={props.alt} />
      </div>
      <Usuario>
        {props.alt}
      </Usuario>
    </div>
  )
}