/*
    {
        title: "",
        img: ,
        rating: ,
        rating_num: ,
        strength: ,
        hypertrophy: ,
        endurance: ,
        type: ,
    },
*/
import benchpress from "../images/benchpress.jpeg";
import deadlift from "../images/deadlift.jpeg";
import squat from "../images/squat.jpeg";
import military_press from "../images/Military_press.jpeg";
import bent_over_row from "../images/bent_over_row.jpeg";
import chin_up from "../images/chin_up.jpeg";
import dumbell_curl from "../images/dumbell_curl.jpeg";
import lateral_raise from "../images/lateral_raise.jpeg";
import tricep_extension from "../images/tricep_extension.jpeg";
import running from "../images/running.jpeg";
import swimming from "../images/swimming.jpeg";
import jump_rope from "../images/jump_rope.jpeg";

export const exercises = [
    {
        title: "Bench Press",
        img: benchpress,
        rating: 5,
        rating_num: 5.6,
        strength: true,
        hypertrophy: true,
        endurance: false,
        type: "push",
    },
    {
        title: "Squat",
        img: squat,
        rating: 5,
        rating_num: 4.3,
        strength: true,
        hypertrophy: true,
        endurance: false,
        type: "legs",
    },
    {
        title: "Dumbell curl",
        img: dumbell_curl,
        rating: 5,
        rating_num: 6.2,
        strength: false,
        hypertrophy: true,
        endurance: false,
        type: "pull",
    },
    {
        title: "jump-rope",
        img: jump_rope,
        rating: 4,
        rating_num: 1.1,
        strength: false,
        hypertrophy: false,
        endurance: true,
        type: "endurance",
    },
    {
        title: "Chin-ups",
        img: chin_up,
        rating: 4,
        rating_num: 6.9,
        strength: false,
        hypertrophy: true,
        endurance: false,
        type: "pull",
    },
    {
        title: "swimming",
        img: swimming,
        rating: 4,
        rating_num: 1.3,
        strength: false,
        hypertrophy: false,
        endurance: true,
        type: "endurance",
    },
    {
        title: "Lateral Raises",
        img: lateral_raise,
        rating: 4,
        rating_num: 4.1,
        strength: false,
        hypertrophy: true,
        endurance: false,
        type: "push",
    },
    {
        title: "Bent over rows",
        img: bent_over_row,
        rating: 4,
        rating_num: 3.1,
        strength: true,
        hypertrophy: true,
        endurance: false,
        type: "pull",
    },
    {
        title: "Tricep extension",
        img: tricep_extension,
        rating: 3,
        rating_num: 2.7,
        strength: true,
        hypertrophy: true,
        endurance: false,
        type: "push",
    },
    {
        title: "Military Press",
        img: military_press,
        rating: 3,
        rating_num: 1.8,
        strength: true,
        hypertrophy: true,
        endurance: false,
        type: "push",
    },
    {
        title: "Deadlift",
        img: deadlift,
        rating: 3,
        rating_num: 3.6,
        strength: true,
        hypertrophy: false,
        endurance: false,
        type: "legs",
    },
    {
        title: "running",
        img: running,
        rating: 3,
        rating_num: 3.8,
        strength: false,
        hypertrophy: false,
        endurance: true,
        type: "endurance",
    },
]