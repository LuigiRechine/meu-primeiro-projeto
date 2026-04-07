import Menu from "../menu/page";
import "./sobre.css"

export default function Sobre(){
    return(
        <div>
            <Menu/>
            <h1 className="title">Sobre Mim</h1>

  <p className="subtitle">
    Sou um estudante do SENAI apaixonado por tecnologia, programação e inovação.
  </p>

  <div className="cards">
    <div className="card">
      <h2>Quem sou eu</h2>
      <p>
        Meu nome é Luigi e estou cursando Desenvolvimento de Sistemas.
        Tenho interesse em aprender cada vez mais sobre tecnologia e criar projetos.
      </p>
    </div>

    <div className="card">
      <h2>Interesses</h2>
      <p>
        Gosto de programação, robótica, IoT e tudo que envolve inovação
        e resolução de problemas com tecnologia.
      </p>
    </div>

    <div className="card">
      <h2>Experiências</h2>
      <p>
        Já participei de projetos envolvendo Arduino, foguetes e desenvolvimento
        de sistemas, aplicando conhecimentos na prática.
      </p>
    </div>

    <div className="card">
      <h2>Objetivo</h2>
      <p>
        Meu objetivo é me tornar um profissional na área de tecnologia,
        buscando sempre evoluir e aprender novas habilidades.
      </p>
    </div>
  </div>
        </div>
    );
}
