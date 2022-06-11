import "./Footer.css";

const Footer = () => {
  return (
    <div className="generalContainer">
      <div className="firstContainer">
        <div>España</div>
      </div>
      <div className="secondaryContainer">
        <div className="left">
          <span>Publicidad</span>
          <span>Empresa</span>
          <span>Cómo funciona la búsqueda</span>
        </div>
        <div className="center">
          <span>Emisión neutra de carbono desde el 2007</span>
        </div>
        <div className="right">
          <span>Privacidad </span>
          <span>Términos</span>
          <span>Configuración</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
