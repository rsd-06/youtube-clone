import React from "react";

//Importing Navbar CSS File;
import "./Navbar.css";

//Importing Assets;
import menuIcon from './../../assets/menu.png';
import logo from './../../assets/logo.png';
import searchIcon from './../../assets/search.png';
import uploadIcon from './../../assets/upload.png';
import moreIcon from './../../assets/more.png';
import notificationIcon from './../../assets/notification.png';
import profileIcon from './../../assets/jack.png';

export default function Navbar(props) {
    return (
        <>
            <nav className="flex-div">
                <div className="nav-left flex-div">
                    <img className="menu-icon" onClick={() => {props.setSideBar((prevSetSideBar) => {return !prevSetSideBar})}} src={menuIcon} alt="Menu-Icon" />
                    <img className="logo" src={logo} alt="Logo" />
                </div>

                <div className="nav-middle flex-div">
                    <div className="search-box flex-div">
                        <input type="text" placeholder="Search"/>
                        <img src={searchIcon} alt="Search-Icon" />
                    </div> 
                </div>

                <div className="nav-right flex-div">
                    <img src={uploadIcon} alt="Upload-Icon" />
                    <img src={moreIcon} alt="More-Icon" />
                    <img src={notificationIcon} alt="Notification-Icon" />
                    <img className="user-icon" src={profileIcon} alt="Profile-Icon" />
                </div>
            </nav>
        </>
    )
}