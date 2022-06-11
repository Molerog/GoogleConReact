import "./Body.css";

const Body = () => {
  return (
    <div class="google-container">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt=""
      />
      <div class="input-container">
        <img
          class="search"
          src="https://raw.githubusercontent.com/SofiaPinilla/clase-copia-gogle/f25f3d1984e6fdf8893a1a9e1cc00dcb244348e0/assets/search.svg"
          alt=""
        />
        <input type="text" name="" id="" />
        <img
          class="microphone"
          src="https://raw.githubusercontent.com/SofiaPinilla/clase-copia-gogle/f25f3d1984e6fdf8893a1a9e1cc00dcb244348e0/assets/microphone.svg"
          alt=""
        />
      </div>
      <div class="buttons-container">
        <button>Buscar con Google</button>
        <button>Voy a tener suerte</button>
      </div>
      <div class="language-container">
        <span>Ofrecido por Google en:</span>
        <a href="hola">valencia</a>
        <a href="hola">galego</a>
        <a href="hola">euskara</a>
      </div>
    </div>
  );
};

export default Body;
