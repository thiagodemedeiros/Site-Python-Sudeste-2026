import '../styles/Section4.css'
import img from "/logo_pyse_1.PNG"

export default function Section4() {
    return (
        <div className="Section4">
            <div className='Section4-itens'>
                <img src={img} alt="Logo da python sudeste" />
                <div className='Section4-itens-texto'>
                    <h4>Confira a Agenda Completa!</h4>
                    <p>Veja todos os detalhes da programação da Python Sudeste 2025 e não perca nenhuma atividade.</p>
                    <a href="/"><button>Acessar Agenda</button></a>
                </div>
            </div>
        </div>
    )
}