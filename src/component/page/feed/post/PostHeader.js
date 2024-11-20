export default function PostHeader({ creator }) {
    return (
      <div className="post-header">
        <img src={`./assets/small/${creator}.png`} alt={creator} />
        <h2>{creator}</h2>
        <ion-icon className="right-icon" name="ellipsis-horizontal"></ion-icon>
      </div>
    );
  }