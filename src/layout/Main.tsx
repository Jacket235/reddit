import './main.css';
import icons from "../components/Icons";
import TimeAgo from '../functions/TimeAgo'

export default function Main() {
    return (
        <main>
            <div className="top">
                <button>
                    <span>Best</span>
                    <span>{icons.arrow}</span>
                </button>
                <button>
                    <span>{icons.card_layout}</span>
                    <span>{icons.arrow}</span>
                </button>
            </div>
            <hr style={{margin: "8px 0 0 0"}}></hr>
            <div className="content">
                <article>
                    <div className="credit-bar">
                        <span>
                            <a>
                                <span style={{paddingRight: "6px"}}>{icons.default_article_subreddit_icon}</span>
                                r/subreddit
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-06T19:39:00" />
                        </span>
                        <button>
                            {icons.article_actions}
                        </button>
                    </div>
                    <a>
                        A very cute kitty I found on Google images.
                    </a>
                    <div style={{backgroundImage: `url(car.jpg)`}} className="post-media-container">
                        <img src="car.jpg"/>
                    </div>
                </article>
            </div>
        </main>
    );
}