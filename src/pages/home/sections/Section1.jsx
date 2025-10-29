import '../styles/Section1.css'
import banner from '../../../../public/banner_section_1.png'

export default function section1() {
    return (
        <div className="section1">
            <img src={banner} alt="Banner PythonSudeste" />

            <div className="section1-aba-ingressos">
                <h1>Compre seu ingresso para Python Sudeste</h1>
                <h2>Primeiro lote da Python Sudeste liberado</h2>
                <a href="/linkparaoingresso"><button>Compre aqui!</button></a>
            </div>
        </div>
    )
}