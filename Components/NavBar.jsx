import { Link } from "react-router-dom";

function Nav() {

    return (
        <div>
            <Link to="/">            
                <h3>Home</h3>
            </Link>
            <Link to="/create">            
                <h3>Create</h3>
            </Link>
            <Link to="/gallery">            
                <h3>Gallery</h3>
            </Link>
        </div>
    )
}

export default Nav;