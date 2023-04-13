import { Link } from "react-router-dom";
import '../src/App.css'



const Nav = () => {

    return (
        <div className="nav">
            <Link to="/">            
                <h2 className="tab">Home</h2>
            </Link>
            <Link to="/create">            
                <h2 className="tab">Enlist New Crewmate</h2>
            </Link>
            <Link to="/gallery">            
                <h2 className="tab">View The Squad</h2>
            </Link>
        </div>
    )
}

export default Nav;