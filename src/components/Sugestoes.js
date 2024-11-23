import { Sugestao } from "./Sugestao"

export const Sugestoes = (props) => {
  const objSugestao = [
    { src: "assets/bad.vibes.memes.svg", nome: "bad vibes memes", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/chibirdart.svg", nome: "chibirdart", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram", seguir: "Seguir" },
    { src: "assets/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você", seguir: "Seguir" }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {objSugestao.map(i =>
        <Sugestao key={i.nome} src={i.src} razao={i.razao} seguir={i.seguir} />
      )}
    </div>
  )
}