import React from 'react'

//Importing Styles;
import "./Sidebar.css";

//Importing Assets;
import home from './../../assets/home.png';
import game from './../../assets/game_icon.png';
import automobiles from './../../assets/automobiles.png';
import sports from './../../assets/sports.png';
import entertainment from './../../assets/entertainment.png';
import tech from './../../assets/tech.png';
import music from './../../assets/music.png';
import blogs from './../../assets/blogs.png';
import news from './../../assets/news.png';
import jack from './../../assets/jack.png';
import simon from './../../assets/simon.png';
import tom from './../../assets/tom.png';
import megan from './../../assets/megan.png';
import cameron from './../../assets/cameron.png';


const Sidebar = (props) => {
  return (
    <>
        <div className={`sidebar ${props.sideBar ? '' : 'collapsed-sidebar'}`}>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={home} alt="Home Icon" /><p>Home</p>
                </div>
                <div className="side-link">
                    <img src={game} alt="Game Icon" /><p>Game</p>
                </div>
                <div className="side-link">
                    <img src={automobiles} alt="Automobiles Icon" /><p>Automobiles</p>
                </div>
                <div className="side-link">
                    <img src={sports} alt="Sports Icon" /><p>Sports</p>
                </div>
                <div className="side-link">
                    <img src={entertainment} alt="Entertainment Ico " /><p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={tech} alt="Technology Icon" /><p>Technology</p>
                </div>
                <div className="side-link">
                    <img src={music} alt="Music Icon" /><p>Music</p>
                </div>
                <div className="side-link">
                    <img src={blogs} alt="Blogs Icon" /><p>Blogs</p>
                </div>
                <div className="side-link">
                    <img src={news} alt="News" /><p>News</p>
                </div> 
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                
                <div className="side-link">
                    <img src={jack} alt="Jack Icon" /><p>PewDiePie</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="Simon Icon" /><p>MrBeast</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" /><p>Justing Bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" /><p>5-Minute Crafts</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="" /><p>Nas Daily</p>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Sidebar