import React, {useState} from "react";

function AramaCubugu({belirtHavaDurumu}){
    const api = {
        key: "f3b5a5469a90544ce6f0313bbe9def29",
        base: "https://api.openweathermap.org/data/2.5/weather"
    }
    const [araParametre,belirtAramaParametre] = useState("");

    const ara = (e) => {
        if (e.key === "Enter" ){
            fetch(`${api.base}?q=${araParametre}&lang=tr&appid=${api.key}`)
            .then((veri)=> veri.json())
            .then((sonuc) => {
                belirtAramaParametre("");
                belirtHavaDurumu(sonuc);
            })
        }
    }
    return(
    <div className="arama">
        <input 
        className="arama-input" 
        type="text" 
        placeholder="Şehir"
        onChange={(e)  => belirtAramaParametre(e.target.value)}
        value={araParametre}
        onKeyPress={ara}
        />
    </div>
    )
}

export default AramaCubugu