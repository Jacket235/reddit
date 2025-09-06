import './sidebar.css';
import icons from "../components/Icons";
import { useState } from 'react';

export default function Sidebar() {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <div className={`sidebar`}>
            <nav>
                <div className="left-top-nav-section">
                    <ul>
                        <li>
                            <a>
                                <span>{icons.home}</span> Home
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>{icons.popular}</span> Popular
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>{icons.answers}</span> Answers
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>{icons.explore}</span> Explore
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>{icons.all}</span> All
                            </a>
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <details>
                    <summary>Custom feeds</summary>
                    <ul>
                        <li>
                            <span>{icons.plus_sign}</span> Create Custom Feed
                        </li>
                    </ul>
                </details>
                <hr></hr>
                <details>
                    <summary>Recent</summary>
                    <ul>
                        <li>
                            <span>{icons.default_subreddit_icon}</span> r/subreddit
                        </li>
                        <li>
                            <span>{icons.default_subreddit_icon}</span> r/subreddit
                        </li>
                    </ul>
                </details>
                <hr></hr>
                <details>
                    <summary>Communities</summary>
                    <ul>
                        <li>
                            <span>{icons.plus_sign}</span> Create Community
                            </li>
                        <li>
                            <span>{icons.cogwheel}</span> Manage Communities
                        </li>
                        <li>
                            <a>
                                <span className="subreddit-info">
                                    {icons.default_subreddit_icon}
                                    r/subreddit
                                </span>
                                <button>{icons.star}</button>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="subreddit-info">
                                    {icons.default_subreddit_icon}
                                    r/subreddit
                                </span>
                                <button>{icons.star}</button>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="subreddit-info">
                                    {icons.default_subreddit_icon}
                                    r/subreddit
                                </span>
                                <button>{icons.star}</button>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="subreddit-info">
                                    {icons.default_subreddit_icon}
                                    r/subreddit
                                </span>
                                <button>{icons.star}</button>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="subreddit-info">
                                    {icons.default_subreddit_icon}
                                    r/subreddit
                                </span>
                                <button>{icons.star}</button>
                            </a>
                        </li>
                    </ul>
                </details>
                <hr></hr>
                <details>
                    <summary>Resources</summary>
                    <ul>
                        <li>
                            <span>{icons.reddit_outline}</span> r/subreddit
                        </li>
                        <li>
                            <span>{icons.advertise_nav}</span> Advertise
                        </li>
                        <li>
                            <span>{icons.reddit_pro}</span> Reddit Pro
                        </li>
                        <li>
                            <span>{icons.help}</span> Help
                        </li>
                        <li>
                            <span>{icons.blog}</span> Blog
                        </li>
                        <li>
                            <span>{icons.careers}</span> Careers
                        </li>
                        <li>
                            <span>{icons.press}</span> Press
                        </li>
                        <hr></hr>
                        <li>
                            <span>{icons.communities}</span> Communities
                        </li>
                        <li>
                            <span>{icons.best_of_reddit}</span> Best of Reddit
                        </li>
                        <li>
                            <span>{icons.top_translated_posts}</span> Top Translated Posts
                        </li>
                        <li>
                            <span>{icons.topics}</span> Topics
                        </li>
                        <hr></hr>
                        <li>
                            <span>{icons.reddit_rules}</span> Reddit Rules
                        </li>
                        <li>
                            <span>{icons.privacy_policy}</span> Privacy Policy
                        </li>
                        <li>
                            <span>{icons.user_agreement}</span> User Agreement
                        </li>
                        <li>
                            <span>{icons.accessibility}</span> Accessibility
                        </li>
                    </ul>
                </details>
                <a href="./" style={{display: "block", marginTop: "32px", marginBottom: "16px", fontSize: "10px", color: "inherit", textDecoration: "none"}}>Reddit, Inc. © 2025. All rights reserved.</a>
            </nav>
        </div>
    );
}