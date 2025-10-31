import Header from "../../components/Header";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";

export default function Home() {
    return(
        <div className="Home">
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
        </div>
    )
}