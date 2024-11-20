export default function Suggestion({ image, name, text }) {
    return (
      <div className="suggestion">
        <img src={`./assets/small/${image}.png`} alt={name} />
        <div>
          <p className="username">{name}</p>
          <small>{text}</small>
        </div>
        <button>Seguir</button>
      </div>
    );
  }