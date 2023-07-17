import React from "react";
import "../styles/Card.css";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

interface Props {
    img: string;
    rating: number;
    rating_num: number;
    title: string;
    title_fr: string;
    lang: string;
}

function Card({ img, rating, rating_num, title, title_fr, lang }:Props) {
    const [value, setValue] = React.useState<number | null>(rating);


    return (
        <div className="col-auto d-flex flex-row justify-content-center">
            <div className="card_container d-flex flex-column">
                <img src={img}></img>
                <div className="p-2">
                    <span className="d-flex flex-row card_rating">
                        <Rating name="name" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                        <div className="card_ratingNum">
                            &ensp;{rating_num}k
                        </div>
                    </span>
                    <h5 className="mb-0 card_title">{lang === "english" ? title : title_fr}</h5>
                </div>
                <div className="mt-auto px-2 mb-2" >
                    <hr className="m-0 mb-1"></hr>
                    <div className="d-flex justify-content-center">
                        <Link className="card_link" to={"https://www.google.com/search?q=" + title} target="_blank">{lang === "english" ? "details" : "détails"}</Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Card;