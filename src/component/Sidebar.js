import { useState } from "react";
import Disclamer from "./sidebar/Disclamer";
import Suggestions from "./sidebar/Suggestions";
import User from "./sidebar/User";

export default function Sidebar() {
  const defaults = { name: "Catana", image: "./assets/large/catanacomics.png" };
  const [name, setName] = useState(defaults.name);
  const [image, setImage] = useState(defaults.image);

  function changeName() {
    setName(prompt("Qual o seu nome?") || defaults.name);
  }

  function changeImage() {
    setImage(prompt("Qual a sua imagem?") || defaults.image);
  }

  return (
    <aside>
      <User
        name={name}
        changeName={changeName}
        username="catanacomics"
        image={image}
        changeImage={changeImage}
      />
      <Suggestions />
      <Disclamer />
    </aside>
  );
}