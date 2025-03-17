import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router";
import profileImg from "../../assets/patrick.jpeg";
import "../home/styles.css";

export function Home() {
  const { toggleTheme } = useTheme();

  return (
    <div className="container">
      <div id="content">
        <img id="profileImg" src={profileImg} width={112} alt="" />
        <p className="tittle">@heittski</p>

        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>

        <div className="botaoLink">
          <button className="botao">Inscreva-se no NLW</button>
          <button className="botao">Baixe meu e-book</button>
          <button className="botao">Veja meu portifólio</button>
          <button className="botao">Conheça o Explorer</button>
        </div>

        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
