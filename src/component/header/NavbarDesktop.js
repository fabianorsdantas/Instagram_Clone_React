export default function NavbarDesktop() {
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    return (
      <nav className="desktop">
        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <img src="./assets/logo.png" alt="logo do Instagram" />
        </div>
  
        <input type="text" placeholder="Pesquisar" />
  
        <div className="actions">
          {icons.map(icon => (
            <ion-icon key={icon} name={icon}></ion-icon>
          ))}
        </div>
      </nav>
    );
  }