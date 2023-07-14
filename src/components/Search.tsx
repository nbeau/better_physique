import "../styles/Search.css";
import Modal from "./Modal";
import { useState } from "react";

function Search() {
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
            <input className="search" placeholder="Find Exercises or Recipes" onChange={e => setSearch(e.target.value)} onClick={() => {setOpenModal(true)}}></input>
            {openModal && <Modal search={search} closeModal={setOpenModal}/>}
        </>
    );
}

export default Search;