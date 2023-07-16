import { useState } from "react";
import "../styles/Language.css";

interface Props {
    lang: string;
    setLang: Function;
}
function Language({ lang, setLang }:Props) {
    return (
        <>
            <select className="lang_select" name="lang" onChange={e => {setLang(e.target.value)}}>
                <option value="english">English</option>
                <option value="french">Français</option>
            </select>
        </>
    );
}

export default Language;