export default function Story({ user }) {
    return (
      <div className="story">
        <div>
          <img src={`./assets/large/${user}.png`} alt={user} />
        </div>
        <p>{user}</p>
      </div>
    );
  }