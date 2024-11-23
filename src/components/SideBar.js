import { useState } from "react"
import { Usuario } from "./Usuario"
import { Sugestoes } from "./Sugestoes"

export default function Sidebar(props) {
  const [nome, setNome] = useState("catanacomics")
  const [foto, setFoto] = useState("assets/catanacomics.svg")
  const links = "Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"
  const copyright = "© 2021 INSTAGRAM DO FACEBOOK"

  const handleNome = () => {
    const novoNome = prompt("Escolha um novo nome de usuário: ")
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

      <Copyright>
        {copyright}
      </Copyright>
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