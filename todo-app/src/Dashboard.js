import React from "react";
import { Link } from "react-router-dom";

 export default function Dashboard(){
    return(
        <div class="dropdown">
        <nav>
        <ul >
            <li>
                <Link to="/homepage">HOMEPAGE</Link>
            </li>
            <li>
                <Link to="/funpage">FUNPAGE</Link>
            </li>
        </ul>
        </nav>
        </div>
    )

 }