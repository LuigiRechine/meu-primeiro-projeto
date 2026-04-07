import "./menu.css"

export default function Menu(){
    return(
        <nav className="nav">
            <a href="/">Home</a>
            <a href="/meusPlanos">Meus Planos</a>
            <a href="/sobre">Sobre</a>
        </nav>
    );
}