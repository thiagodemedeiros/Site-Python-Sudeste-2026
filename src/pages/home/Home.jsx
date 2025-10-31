import Header from "../../components/Header";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";

export default function Home() {
    return(
        <div className="Home">
            <Header/>
            <Section1/>
            <Section2/>
        </div>
    )
}