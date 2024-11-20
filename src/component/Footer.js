export default function Footer() {
    const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
  
    return (
      <footer>
        {icons.map(icon => (
          <ion-icon key={icon} name={icon}></ion-icon>
        ))}
      </footer>
    );
  }