import "../styles/Search.css";
import Modal from "./Modal";
import { useState } from "react";

interface Props {
    lang: string;
}

function Search({ lang }:Props) {
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
        <div className="search">
            <input aria-label="search for exercises or diets (click to open)" placeholder={lang === "english" ? "Find Exercises or Recipes" : "Recherche d'exercices ou de recettes"} onChange={e => setSearch(e.target.value)} onClick={() => {setOpenModal(true)}}></input>
            <div className="search_icon">
                <i className="fa fa-search"></i>
            </div>
            
        </div>
            
            {openModal && <Modal search={search} closeModal={setOpenModal} lang={lang} />}
        </>
    );
}

export default Search;