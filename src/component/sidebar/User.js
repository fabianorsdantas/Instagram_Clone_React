export default function User({ name, changeName, username, image, changeImage }) {
    return (
      <div className="user">
        <img onClick={changeImage} src={image} alt={username} />
        <div>
          <p className="username">{username}</p>
          <div className="name-box">
            <p className="name">{name}</p>
            <ion-icon onClick={changeName} name="pencil"></ion-icon>
          </div>
        </div>
      </div>
    );
  }