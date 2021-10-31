import React from 'react'
import {SidebarData} from '../SideBarData/SidebarData'
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {

    return (
        <nav className='nav-menu active'>
            <ul className='nav-menu-items'>
                {
                    SidebarData.map((item, index) => {
                        return(
                            <li key={index} className='nav-text'>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className='nav-text'>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar
