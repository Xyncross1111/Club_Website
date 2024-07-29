import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import Style from "../Stylesheets/Ham.module.css"
import { Link } from 'react-router-dom';
import { Menu , X } from "lucide-react";
const Ham = () => {
    const [isopen , setIsOpen] = useState(false);
        const toggleHam = () => {
            setIsOpen((prev)=>!prev);
    }
    return (
        <>
            <div className={Style.hamBtnContainer}>
                <div className={Style.hamBtn} onClick={toggleHam} >
                   {!isopen? <Menu color='white'/> : <X color='white'/>}
                </div>
            </div>
            {isopen && <div className={Style.hamContainer}>
                <nav >
                    <ul className={Style.list}>
                        <li><Link to={"/"} className={Style.active}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/achievements"}>Achievements</Link></li>
                        <li><Link to={"/events"}>Events</Link></li>
                        <li><Link to={"/resources"}> Resources </Link></li>
                    </ul>
                </nav>
            </div>}
            
        </>
    )
}

export default Ham;
