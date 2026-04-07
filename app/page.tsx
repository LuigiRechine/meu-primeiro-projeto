import "./home.css";
import Menu from "./menu/page";

export default function Home(){
  return(
    <div className="cont">
      <Menu/>
      <h1 className="title">Minhas férias</h1>
      <div className="part">
        <p className="txt">Minhas férias foram bem tranquilas, passei a maior parte do tempo em casa descansando e aproveitando para relaxar depois do ano de estudos. Mesmo sem fazer muitas viagens, consegui aproveitar esse período para descansar bastante.</p>
        <img src="https://s2-oglobo.glbimg.com/z35OK2v4E62JbijpeECdYmDktXs=/0x0:6048x4032/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/8/y/q8wjANRhASNauJBrbtUw/desta-vez-e-definitivamente-muito-cedo-para-mim.jpg" alt="" />
      </div>
      <div className="part">
        <img src="https://turismodenatureza.com.br/wp-content/uploads/2024/10/Complexo-do-Claro-Delfinopolis.jpg" alt="" />
        <p className="txt">Na virada do ano, viajei com minha família para Delfinópolis, em Minas Gerais. Lá foi muito legal, porque pude sair um pouco da rotina, curtir a natureza e passar um tempo diferente com todo mundo.</p>
      </div>
      <div className="part">
        <p>No geral, minhas férias foram simples, mas boas. Mesmo ficando bastante em casa, consegui descansar e aproveitar momentos importantes com a família.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Family_Portrait.jpg" alt="" />
      </div> 
    </div>
  )
}