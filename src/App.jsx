 import React, { useState } from "react";
import {Route, Routes} from 'react-router-dom';

//Importing Components;
import Navbar from "./Components/Navbar/Navbar";
import Home from './Pages/Home/Home.jsx';
import Video from './Pages/Video/Video.jsx';


export default function App() {

    /*Why SideBar State ?
    Setting the Sidebar State, So that On toggling this State, We can collapse and expand the Sidebar.
    Hence, we would be sending the value of the Sidebar state to Home Page Component and then to Sidebar Component, 
    and The setSidebar function to toggle the value of Sidebar State, to Navbar, So that we can add onClick event listener on the "menu-icon".*/
    const [sideBar,setSideBar] = useState(true);

    return (
        <>
            <Navbar setSideBar={setSideBar}/>
            <Routes>
                <Route path='/' element={<Home sideBar={sideBar}/>}/>
                <Route path='/video/:catergoryId/:videoId' element={<Video/>} />            
            </Routes>

        </>
    )
}