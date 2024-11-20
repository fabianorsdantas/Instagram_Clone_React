import Story from "./stories/Story";

export default function Stories() {
  const users = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawiwacomicsa",
    "respondeai",
    "filomoderna",
    "memeriagourmet"
  ];
  return (
    <div className="stories">
      {users.map(user => (
        <Story key={user} user={user} />
      ))}
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
}