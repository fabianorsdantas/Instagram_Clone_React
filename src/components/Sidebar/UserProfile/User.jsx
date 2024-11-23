import React from "react";

export function User() {
    const initialName = "Usuário";
    const [name, setName]=React.useState(initialName);
    const splashImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUszm60mLRB8jfszan0JZXTU6Nrd-LvqIzAQ&s";
    const [avatar, setAvatar]=React.useState(splashImage);
       
    function inserirNome(){
        const nomeDigitado = prompt("Seu nome?");
        setName(nomeDigitado);
    }

    function mudaImagem(){
        const linkDigitado=prompt("Digite o link da imagem");
        setAvatar(linkDigitado);
    }

    return (
      <div className="usuario">
        <img onClick={mudaImagem} src={avatar} alt="foto do usuário" />
        <div className="texto">
          <strong onClick={inserirNome}>{name}</strong>
        </div>
      </div>
    );
}
