import Suggestion from "./suggestions/Suggestion";

export default function Suggestions() {
  const suggestions = [
    { image: "badvibesmemes", name: "bad.vibes.memes", text: "Segue você" },
    { image: "chibirdart", name: "chibirdart", text: "Segue você" },
    { image: "razoesparaacreditar", name: "razoesparaacreditar", text: "Novo no Instagram" },
    { image: "adorableanimals", name: "adorable_animals", text: "Segue você" },
    { image: "smallcutecats", name: "smallcutecats", text: "Segue você" }
  ];
  return (
    <div className="suggestions">
      <div className="suggestions-header">
        <p>Sugestões para você</p>
        <button>Ver tudo</button>
      </div>
      {suggestions.map(s => (
        <Suggestion key={s.name} image={s.image} name={s.name} text={s.text} />
      ))}
    </div>
  );
}