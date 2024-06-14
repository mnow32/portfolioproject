import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <React.Fragment>
            <div>About</div>
            <Link to='/home'>Home</Link>
        </React.Fragment>
    )
}

export default About