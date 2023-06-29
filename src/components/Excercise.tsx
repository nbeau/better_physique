import React from "react";
import "../styles/Exercise.css";
import Rating from '@mui/material/Rating';
import bench from "../images/benchpress.jpeg";

interface Props {
    img: string;
    rating: number;
    rating_num: number;
    title: string;
    link: string;
}

function Exercise(props: Props) {
    const [value, setValue] = React.useState<number | null>(props.rating);


    return (
        <div className="exercise_container">
            <img src={props.img}></img>
            <div className="p-2">
                <span className="d-flex flex-row">
                    <Rating name="name" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    <div className="exercise_ratingNum">
                        &ensp;{props.rating_num}k
                    </div>
                </span>
                <h5 className="mb-0 exercise_title">{props.title}</h5>
                <hr className="mt-2 mb-1"></hr>
                <div className="d-flex justify-content-center">
                    <a className="exercise_link" href={props.link}>details</a>
                </div>
            </div>
        </div>
    );
}

export default Exercise;