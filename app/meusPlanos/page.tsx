import Menu from "../menu/page";
import "./meusPlanos.css"

export default function MeusPlanos(){
    return(
        <div>
            <Menu/>
            <h1 className="title">Meus Planos no SENAI 🚀</h1>

  <p className="subtitle">
    Durante minha trajetória no SENAI, pretendo desenvolver habilidades técnicas,
    crescer profissionalmente e me preparar para o mercado de trabalho.
  </p>

  <div className="cards">
    <div className="card">
      <h2>💻 Desenvolvimento</h2>
      <p>
        Aprimorar minhas habilidades em programação, aprendendo novas tecnologias
        como React, Next.js e desenvolvimento de sistemas completos.
      </p>
    </div>

    <div className="card">
      <h2>🤖 Projetos</h2>
      <p>
        Participar de projetos práticos envolvendo robótica, IoT e inovação,
        colocando em prática o que aprendo em aula.
      </p>
    </div>

    <div className="card">
      <h2>📚 Conhecimento</h2>
      <p>
        Expandir meus conhecimentos técnicos e teóricos para me destacar
        na área de tecnologia.
      </p>
    </div>

    <div className="card">
      <h2>🚀 Futuro Profissional</h2>
      <p>
        Me preparar para o mercado de trabalho, buscando oportunidades
        como estágio e crescimento na área de desenvolvimento.
      </p>
    </div>
  </div>
        </div>
    );
}