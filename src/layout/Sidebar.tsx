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
                        <span>{icons.home}</span> 
                        <span>Home</span>
                    </a>
                    <a>
                        <span>{icons.popular}</span> Popular
                    </a>

                    <a>
                        <span>{icons.answers}</span> Answers
                    </a>

                    <a>
                        <span>{icons.explore}</span> Explore
                    </a>

                    <a>
                        <span>{icons.all}</span> All
                    </a>
                </nav>
            </div>
        </div>
    )
}