import './sidebar.css'
import icons from "../components/Icons";
import { useState } from 'react';

export default function Sidebar() {
    const [hovered, setHovered] = useState<boolean>(false); 
    const [expanded, setExpanded] = useState<boolean>(false); 

    return (
        <div className={`sidebar ${hovered ? "hovered" : ""} ${expanded ? "expanded" : ""}`}> 
            <div 
                className={`hoverable-target ${hovered ? "hovered" : ""}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></div>
            <div className="nav-container">
                <div className="nav-button" onClick={() => setExpanded(!expanded)}>
                    {icons.nav_open}
                </div>
                <nav>
                    <a>
                        <span>
                            <span>{icons.home}</span> 
                            <span>Home</span>
                        </span>
                    </a>
                    <a>
                        <span>
                            <span>{icons.popular}</span> 
                            <span>Popular</span>
                        </span>
                    </a>
                    <a>
                        <span>
                            <span>{icons.answers}</span> 
                            <span>Answers</span>
                        </span>
                    </a>
                    <a>
                        <span>
                            <span>{icons.explore}</span>  
                            <span>Explore</span>
                        </span>
                    </a>
                    <a>
                        <span>
                            <span>{icons.all}</span>  
                            <span>All</span>
                        </span>
                    </a>
                </nav>
            </div>
        </div>
    )
}