import React from "react";

//Importing Cascading Style Sheets.
import './Feed.css';

//Importing Assets;
import thumbnail1 from './../../assets/thumbnail1.png';
import thumbnail2 from './../../assets/thumbnail2.png';
import thumbnail3 from './../../assets/thumbnail3.png';
import thumbnail4 from './../../assets/thumbnail4.png';
import thumbnail5 from './../../assets/thumbnail5.png';
import thumbnail6 from './../../assets/thumbnail6.png';
import thumbnail7 from './../../assets/thumbnail7.png';
import thumbnail8 from './../../assets/thumbnail8.png';

export default function Feed(){
    return (
        <>
            <div className="feed">
                <div className="card">
                    <img src={thumbnail1} alt="" />
                    <h2>Video Title</h2>
                    <h3>Channel Name</h3>
                    <p>15k views &bull; 2 days ago</p>
                    {/* &bull; ADDS A BULLET POINT. */}
                </div>
                <div className="card">
                    <img src={thumbnail2} alt="" />
                    <h2>Video Title</h2>
                    <h3>Channel Name</h3>
                    <p>15k views &bull; 2 days ago</p>
                    {/* &bull; ADDS A BULLET POINT. */}
                </div>
                <div className="card">
                    <img src={thumbnail3} alt="" />
                    <h2>Video Title</h2>
                    <h3>Channel Name</h3>
                    <p>15k views &bull; 2 days ago</p>
                    {/* &bull; ADDS A BULLET POINT. */}
                </div>
                <div className="card">
                    <img src={thumbnail4} alt="" />
                    <h2>Video Title</h2>
                    <h3>Channel Name</h3>
                    <p>15k views &bull; 2 days ago</p>
                    {/* &bull; ADDS A BULLET POINT. */}
                </div>
                <div className="card">
                    <img src={thumbnail5} alt="" />
                    <h2>Video Title</h2>
                    <h3>Channel Name</h3>
                    <p>15k views &bull; 2 days ago</p>
                    {/* &bull; ADDS A BULLET POINT. */}
                </div>
                <div className="card">
                    <img src={thumbnail6} alt="" />
                    <h2>Video Title</h2>
                    <h3>Channel Name</h3>
                    <p>15k views &bull; 2 days ago</p>
                    {/* &bull; ADDS A BULLET POINT. */}
                </div>
                <div className="card">
                    <img src={thumbnail7} alt="" />
                    <h2>Video Title</h2>
                    <h3>Channel Name</h3>
                    <p>15k views &bull; 2 days ago</p>
                    {/* &bull; ADDS A BULLET POINT. */}
                </div>
                <div className="card">
                    <img src={thumbnail8} alt="" />
                    <h2>Video Title</h2>
                    <h3>Channel Name</h3>
                    <p>15k views &bull; 2 days ago</p>
                    {/* &bull; ADDS A BULLET POINT. */}
                </div>
            </div>
        </>
    )
}