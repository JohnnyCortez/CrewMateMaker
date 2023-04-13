import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";




const Info = () => {
    const location = useLocation();
    const {crewmate} = location.state;

    return (
        <div>
            <img src="https://coloringonly.com/images/imgcolor/Among-Us-Normal-Character-coloring-page.jpg" height="200" width="200"/>
            <h3>{`Full Government Name: ${crewmate.name}`}</h3>
            <h3>{`Color: ${crewmate.color}`}</h3>
            <h3>{`Height: 3'6`}</h3>
            <h3>{`Weight: 92 lb`}</h3>
            <h3>{`Speed: ${crewmate.speed}`}</h3>
            <h3>{`Description: ${crewmate.description}`}</h3>

            <Link to="/update" state={{crewmate}}>
                Edit
            </Link>
        </div>
    )
}

export default Info;