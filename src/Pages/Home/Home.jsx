import React from "react";

//Importing Components;
import Sidebar from './../../Components/Sidebar/Sidebar.jsx';
import Feed from './../../Components/Feed/Feed.jsx';

//Importing Home CSS File;
import './Home.css';

export default function Home(props){
    return(
        <>
            <Sidebar sideBar={props.sideBar}/>
            <div className={`container ${props.sideBar ? '' : 'expanded-container'}`}>
                {/* If sideBar prop is true, we aren't adding any other classname other than container, but if it's false ( i.e It is collapsed), 
                Then we are adding another classname 'expanded-container' cause then we need to add style differently because the container needs to be expanded. */}
                <Feed/>
            </div>
        </>
    )
}