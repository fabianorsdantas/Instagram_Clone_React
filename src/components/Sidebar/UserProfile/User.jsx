import React from "react";

export function User() {
    const initialName = "Usuário";
    const [name, setName]=React.useState(initialName);
    const splashImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Z4PF5WHqeE-4-f8WVc1-XLNM7i9xk-Q2Ng&s";
    const [avatar, setAvatar]=React.useState(splashImage);
       
    function insertName(){
        const nomeDigitado = prompt("Seu nome?");
        setName(nomeDigitado);
    }

    function changeImage(){
        const linkDigitado=prompt("Digite o link da imagem");
        setAvatar(linkDigitado);
    }

    return (
      <div className="usuario">
        <img onClick={changeImage} src={avatar} alt="foto do usuário" />
        <div className="texto">
          <strong onClick={insertName}>{name}</strong>
        </div>
      </div>
    );
}
