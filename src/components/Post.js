import { useState } from "react"
import { Usuario } from "./Usuario"

export const Post = (props) => {
  const [salvar, setSalvar] = useState("bookmark-outline")
  const [like, setLike] = useState("heart-outline")
  const [cor, setCor] = useState("heart-outline")
  const [curtir, setCurtir] = useState(props.like)

  function salvarPost() {
    if (salvar === "bookmark-outline") {
      setSalvar("bookmark");
    } else {
      setSalvar("bookmark-outline");
    }
  }

  function likePost() {
    if (like === "heart-outline") {
      setLike("heart");
      setCor("red")
      setCurtir(parseFloat(curtir) + 0.001)
    } else {
      setLike("heart-outline");
      setCor("black")
      setCurtir(parseFloat(curtir) - 0.001)
    }
  }

  function likeImage() {
    if (like === "heart-outline") {
      setLike("heart");
      setCor("red")
      setCurtir(parseFloat(curtir) + 0.001)
    }
  }

  return (
    <>
      <div className="post" data-test="post">
        <div className="topo">
          <Usuario>
            <img src={props.srcTopo} alt={props.altTopo} />
            {props.altTopo}
          </Usuario>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img onClick={likeImage} src={props.srcPost} alt={props.altPost} data-test="post-image" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon onClick={likePost} class={cor} name={like} data-test="like-post"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={salvarPost} name={salvar} data-test="save-post"></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.srcLike} alt={props.altLike} />
            <div className="texto" data-test="likes-number">
              Curtido por <strong>{props.altLike}</strong> e <strong>outras {curtir.toFixed(3)} {props.like === 1 ? "pessoa" : "pessoas"}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}