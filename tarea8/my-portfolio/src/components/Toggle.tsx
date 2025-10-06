import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Toogle(){

    const {theme, setTheme} = useContext(ThemeContext);

    const color = theme === "light" ? "white" : "black"; 
    return ( 
        <>
            <div style={{ width:300, height:300, background: color}}>
                {color}
            </div>
            <button onClick={()=>{setTheme(theme === "light" ? "dark": "light")}}>Click</button>
        </>
    )
}