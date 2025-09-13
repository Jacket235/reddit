import './sidebar.css'
import icons from "../components/Icons";
import { useState } from 'react';
import exp from 'constants';

export default function Sidebar() {
    const [hovered, setHovered] = useState<boolean>(false); 
    const [expanded, setExpanded] = useState<boolean>(false); 

    return (
        <div className={`sidebar ${hovered ? "hovered" : ""} ${expanded ? "expanded" : ""}`} onMouseLeave={() => setHovered(false)}> 
            <div 
                className={`hoverable-target ${hovered ? "hovered" : ""}`}
                onMouseEnter={() => setHovered(true)}
            ></div>
            <div className="nav-container">
                <div className="nav-button" onClick={() => setExpanded(!expanded)}>
                    {icons.nav_open}
                </div>
                <nav className={hovered || expanded ? "active" : ""}>
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
                    <hr></hr>
                    <details>
                        <summary>
                            <span>Custom feeds</span>
                            <span>
                                <span>{icons.details_arrow}</span>
                            </span>
                        </summary>
                        <ul>
                            <li>
                                <div className="option">
                                    <span>
                                        <span>{icons.plus_sign}</span>
                                        <span>Create Custom Feed</span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </details>
                    <hr></hr>
                    <details style={{marginTop: "1px"}}>
                        <summary>
                            <span>RECENT</span>
                            <span>
                                <span>{icons.details_arrow}</span>
                            </span>
                        </summary>
                        <ul>
                            <li>
                                <div className="option">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/subreddit</span>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="option">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/subreddit</span>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="option">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/subreddit</span>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="option">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/subreddit</span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </details>
                    <hr></hr>
                    <details>
                        <summary>
                            <span>Communities</span>
                            <span>
                                <span>{icons.details_arrow}</span>
                            </span>
                        </summary>
                        <ul>
                            <li>
                                <div className="option">
                                    <span>
                                        <span>{icons.plus_sign}</span>
                                        <span>Create Community</span>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="option">
                                    <span>
                                        <span>{icons.cogwheel}</span>
                                        <span>Manage Communities</span>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="community-item">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/dogs</span>
                                        <button>{icons.star}</button>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="community-item">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/announcements</span>
                                        <button>{icons.star}</button>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="community-item">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/dogs</span>
                                        <button>{icons.star}</button>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="community-item">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/dogs</span>
                                        <button>{icons.star}</button>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="community-item">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/dogs</span>
                                        <button>{icons.star}</button>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="community-item">
                                    <span>
                                        <span>{icons.default_subreddit_icon}</span>
                                        <span>r/dogs</span>
                                        <button>{icons.star}</button>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </details>
                    <hr></hr>
                    <details style={{marginTop: "1px"}}>
                        <summary>
                            <span>Resources</span>
                            <span>
                                <span>{icons.details_arrow}</span>
                            </span>
                        </summary>
                        <ul>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.reddit_outline}</span> 
                                        <span>About Reddit</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.advertise_nav}</span> 
                                        <span>Advertise</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.reddit_pro}</span> 
                                        <span>Reddit Pro</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.help}</span> 
                                        <span>Help</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.blog}</span> 
                                        <span>Blog</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.careers}</span> 
                                        <span>Careers</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.press}</span> 
                                        <span>Press</span>
                                    </span>
                                </a>
                            </li>
                            <hr></hr>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.communities}</span> 
                                        <span>Communities</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.best_of_reddit}</span> 
                                        <span>Best of Reddit</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.top_translated_posts}</span> 
                                        <span>Top Translated Posts</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.topics}</span> 
                                        <span>Topics</span>
                                    </span>
                                </a>
                            </li>
                            <hr></hr>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.reddit_rules}</span> 
                                        <span>Reddit Rules</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.privacy_policy}</span> 
                                        <span>Privacy Policy</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.user_agreement}</span> 
                                        <span>User Agreement</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                               <a>
                                    <span>
                                        <span>{icons.accessibility}</span> 
                                        <span>Accessibility</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </details>
                    <div className="copyright-link-container">
                        <a className="copyright-link">Reddit, Inc. © 2025. All rights reserved.</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}