export const NavBar = ({ src }) => {
    const objIcons = [
      "paper-plane-outline",
      "compass-outline",
      "heart-outline",
      "person-outline"
    ]
  
    const iconPaper = objIcons[0]
  
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src={src} alt="logo" />
          </div>
  
          <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div className="icones">
            {objIcons.map((i) => <ion-icon key={i} name={i}></ion-icon>)}
          </div>
  
          <div className="icones-mobile">
            <ion-icon name={iconPaper}></ion-icon>
          </div>
        </div>
      </div>
    )
  }