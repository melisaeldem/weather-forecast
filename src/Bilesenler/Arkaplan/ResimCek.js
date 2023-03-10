import yagmurlu from "../../Resimler/rainy.jpg";
import bulutlu from "../../Resimler/rainy.jpg";
import sisli from "../../Resimler/foggy.jfif";
import karli from "../../Resimler/karli.jpg";
import gokkusagi from "../../Resimler/rainbow-weather.jpg";
// import firtinali from "../../Resimler/strom.png";
import gunesli from "../../Resimler/sunny.jpg";

function ResimCek({durum}) {
    switch (durum){ 
        case "Rain": 
        return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />
        case "Drizzle": 
        return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />
        case "Clear": 
        return <img className="arkaplan-resim" src={gunesli} alt="gunesli" />
        case "Mist": 
        return <img className="arkaplan-resim" src={sisli} alt="sisli" />
        case "Snow": 
        return <img className="arkaplan-resim" src={karli} alt="karli" />
        // case "Strom": 
        // return <img className="arkaplan-resim" src={firtinali} alt="firtinali" />
        case "Clouds": 
        return <img className="arkaplan-resim" src={bulutlu} alt="bulutlu" />
        default: 
        return <img className="arkaplan-resim" src={gokkusagi} alt="gokkusagi" />
    }

}

export default ResimCek;