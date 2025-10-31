import logo from "/logo_pyse_1.PNG"
import "./styles/Header.css"

export default function Header() {
    return(
        <div className="Header">
            <div className="Header-ingresso">
            <a href="/"><img src={logo} alt="Logo Python sudeste" /></a>
            <a href="/ingresso"><button>Ingressos aqui!</button></a>
            </div>
            <div className="Header-rotas">
                <a href="/sobre"><h4>Sobre o Evento</h4></a>
                <a href="/local"><h4>Local</h4></a>
                <a href="/programacao"><h4>Programação</h4></a>
            </div>
        </div>
    )
}