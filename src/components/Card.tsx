import React from "react";
import "../styles/Card.css";
import Rating from '@mui/material/Rating';
import bench from "../images/benchpress.jpeg";
import { Link } from "react-router-dom";

interface Props {
    img: string;
    rating: number;
    rating_num: number;
    title: string;
}

function Card(props: Props) {
    const [value, setValue] = React.useState<number | null>(props.rating);


    return (
        <div className="col-auto d-flex flex-row justify-content-center">
            <div className="card_container">
                <img src={props.img}></img>
                <div className="p-2">
                    <span className="d-flex flex-row">
                        <Rating name="name" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                        <div className="card_ratingNum">
                            &ensp;{props.rating_num}k
                        </div>
                    </span>
                    <h5 className="mb-0 card_title">{props.title}</h5>
                    <hr className="mt-2 mb-1"></hr>
                    <div className="d-flex justify-content-center">
                        <Link className="card_link" to={"https://www.google.com/search?q=" + props.title} target="_blank">details</Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Card;