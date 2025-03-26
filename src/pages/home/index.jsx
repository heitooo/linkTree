import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Instagram, Github, Youtube, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import "../home/styles.css";

export function Home() {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/heitoo");

        setUser(response.data);
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário", error);
      }
    }
    getUserData();
  }, []);

  return (
    <div className="container">
      <div id="content">
        <img id="profileImg" src={user.avatar_url} width={112} alt="" />
        <p className="tittle">@{user.login}</p>

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
          <a href="https://github.com/heitooo">
            <Github />
          </a>
          <a href="https://www.instagram.com/">
            <Instagram />
          </a>
          <a href="https://www.youtube.com/">
            <Youtube />
          </a>
          <a href="linkedin.in">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
