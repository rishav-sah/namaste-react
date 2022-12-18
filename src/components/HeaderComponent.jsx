import logo from "../assets/logo-web-pirates.png";


const HeaderComponent = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img className="logo-image" src={logo} alt="web pirates" />
      </div>
    </header>
  );
};

export default HeaderComponent;