import "../styles/Search.css";
import Modal from "./Modal";
import { useState } from "react";

function Search() {
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
        <div className="search">
            <input placeholder="Find Exercises or Recipes" onChange={e => setSearch(e.target.value)} onClick={() => {setOpenModal(true)}}></input>
            <div className="search_icon">
                <i className="fa fa-search"></i>
            </div>
            
        </div>
            
            {openModal && <Modal search={search} closeModal={setOpenModal}/>}
        </>
    );
}

export default Search;