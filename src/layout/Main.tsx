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
            <div className="posts">
                <article>
                    <a href="article"></a>
                    <div className="credit-bar">
                        <span>
                            <a href="cats">
                                <span className="subreddit-icon">{icons.default_article_subreddit_icon}</span>
                                r/cats
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-06T19:39:00" />
                        </span>
                        <button>
                            {icons.article_actions}
                        </button>
                    </div>
                    <div className="post-title">
                        <a>
                            A very cute kitty I found on Google images.
                        </a>
                    </div>
                    <div style={{backgroundImage: `url(car.jpg)`}} className="post-media-container">
                        <img src="car.jpg"/>
                    </div>
                    <div className="action-row">
                        <span>
                            <button className="vote">{icons.upvote}</button>
                            67
                            <button className="vote">{icons.downvote}</button>
                        </span>
                        <span>
                            <a href="comments">{icons.comment} 12</a>
                        </span>
                        <span>
                            <button>{icons.reward}</button>
                        </span>
                        <span>
                            <button>{icons.share}Share</button>
                        </span>
                    </div>
                </article>
                <hr></hr>
                <article>
                    <a href="article"></a>
                    <div className="credit-bar">
                        <span>
                            <a href="bigdogs">
                                <span className="subreddit-icon">{icons.default_article_subreddit_icon}</span>
                                r/bigdogs
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-06T21:25:00" />
                        </span>
                        <button>
                            {icons.article_actions}
                        </button>
                    </div>
                    <div className="post-title">
                        <a>
                            Some bear photo
                        </a>
                    </div>
                    <div style={{backgroundImage: `url(bear.jpg)`}} className="post-media-container">
                        <img src="bear.jpg"/>
                    </div>
                    <div className="action-row">
                        <span>
                            <button className="vote">{icons.upvote}</button>
                            12
                            <button className="vote">{icons.downvote}</button>
                        </span>
                        <span>
                            <a href="comments">{icons.comment} 1</a>
                        </span>
                        <span>
                            <button>{icons.reward}</button>
                        </span>
                        <span>
                            <button>{icons.share}Share</button>
                        </span>
                    </div>
                </article>
            </div>
        </main>
    );
}