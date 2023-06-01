import React from 'react';
import NavigationBar from "./NavigationBar";
import {goToHomePage} from "../../functions/navigation";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="page-header">
            <h1 onClick={() => goToHomePage(navigate)}>Spray n Slay</h1>
            <NavigationBar/>
        </div>
    );
}

export default Header;