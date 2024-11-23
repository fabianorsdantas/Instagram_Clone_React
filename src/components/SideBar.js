import { useState } from "react"
import { Usuario } from "./Usuario"
import { Sugestoes } from "./Sugestoes"

export default function Sidebar(props) {
  const [nome, setNome] = useState("Usuário")
  const [foto, setFoto] = useState("data:image/jpeg;base64,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")
  const links = "Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"
  const copyright = "© 2024 INSTAGRAM DO FACEBOOK"

  const handleNome = () => {
    const novoNome = prompt("Digite seu novo nome de usuário: ")
    setNome(!novoNome ? nome : novoNome)
  }

  const handleFoto = () => {
    const novaFoto = prompt("Insira o link da sua foto: ")
    setFoto(!novaFoto ? foto : novaFoto)
  }

  return (
    <div className="sidebar">
      <Usuario>
        <img src={foto} alt="imagem de perfil" onClick={handleFoto} data-test="profile-image" />
        <div className="texto">
          <span data-test="name">
            <strong>{nome}</strong>
            <ion-icon name="pencil" onClick={handleNome} data-test="edit-name"></ion-icon>
          </span>
        </div>
      </Usuario>

      <Sugestoes />

      <Links>
        {links}
      </Links>

      <Links>
        {copyright}
      </Links>
    </div>

  )
}

const Links = (props) => {
  return (
    <div className="links">
      {props.children}
    </div>
  )
}

const Copyright = (props) => {
  return (
    <div className="copyright">
      {props.copyright}
    </div>
  )
}