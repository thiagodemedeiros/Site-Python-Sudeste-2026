import "../styles/Section9.css"
import fiap from "/patrocinadores/fiap.webp"
import alura from "/patrocinadores/alura.webp"
import maravalley from "/patrocinadores/maravaley.png"

export default function Section9() {
    return (<>
        <div className="Section9">
            <div className="Section9_titulo">
                <h4>Patrocinadores</h4>
                <h5>Conheça nossos patrocinadores e apoiadores</h5>
            </div>

            <div className="Section9_patrocinadores">
                <img src={fiap} alt="" />
                <img src={alura} alt="" />
                <img src={maravalley} alt="" />
            </div>
        </div>
    </>)
}