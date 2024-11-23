import { Story } from "./Story"

export const Stories = () => {
  const objStory = [
    { src: "assets/9gag.svg", nome: "9gag" },
    { src: "assets/meowed.svg", nome: "meowed" },
    { src: "assets/barked.svg", nome: "barked" },
    { src: "assets/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet" },
    { src: "assets/wawawicomics.svg", nome: "wawawicomics" },
    { src: "assets/respondeai.svg", nome: "respondeai" },
    { src: "assets/filomoderna.svg", nome: "filomoderna" },
    { src: "assets/memeriagourmet.svg", nome: "memeriagourmet" }
  ]

  return (
    <div className="stories">
      {objStory.map(i =>
        <Story key={i.nome} src={i.src} alt={i.nome} usuario={i.nome} />
      )}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}