import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div>
        <a href="https://about.google/?fg=1&utm_source=google-ES&utm_medium=referral&utm_campaign=hp-header">
          Sobre Google
        </a>
        <a href="https://store.google.com/ES?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=es-ES">
          Tienda
        </a>
      </div>
      <div>
        <a href="hola">Gmail</a>
        <a href="hola">Imágenes</a>
        <button class="loginButton">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Navbar;
