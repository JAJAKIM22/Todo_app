import React from "react";
import { Link } from "react-router-dom";

 export default function Dashboard(){
    return(
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
            </button>
        <nav>
        <ul class="dropdown-menu">
            <li>
                <Link to="/homepage"><button class="dropdown-item" type="button">HOMEPAGE</button></Link>
            </li>
            <li>
                <Link to="/funpage"><button class="dropdown-item" type="button">FUNPAGE</button></Link>
            </li>
        </ul>
        </nav>
        </div>
    )

 }