import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router";
import { Sun, Moon, Instagram, Github, Youtube } from "lucide-react";
import profileImg from "../../assets/patrick.jpeg";
import "../home/styles.css";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <div id="content">
        <img id="profileImg" src={profileImg} width={112} alt="" />
        <p className="tittle">@heittski</p>

        <div className="toggle-container" onClick={toggleTheme}>
          <div
            className={`toggle-switch ${theme === "dark" ? "dark" : "light"}`}
          >
            {theme === "dark" ? (
              <Moon size={20} color="white" />
            ) : (
              <Sun size={20} color="black" />
            )}
          </div>
        </div>

        <div className="botaoLink">
          <button className="botao">Inscreva-se no NLW</button>
          <button className="botao">Baixe meu e-book</button>
          <button className="botao">Veja meu portifólio</button>
          <button className="botao">Conheça o Explorer</button>
        </div>

        <div className="links">
          <Instagram />
          <Github />
          <Youtube />
        </div>
      </div>
    </div>
  );
}
