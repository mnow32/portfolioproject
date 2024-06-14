import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <React.Fragment>
            <div>Home</div>
            <div>Pisanie</div>
            <Link to='/about'>About</Link>
        </React.Fragment>
    )
}

export default Home