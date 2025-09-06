import './main.css';
import icons from "../components/Icons";

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
            <hr></hr>
            <div className="content">
                <article>
                    <div className="credit-bar">
                        <span>
                            <a>
                                <span style={{paddingRight: "6px"}}>{icons.default_article_subreddit_icon}</span>
                                r/subreddit
                            </a>
                            <span>•</span>
                            <span>12 min. ago</span>
                        </span>
                        <button>
                            {icons.article_actions}
                        </button>
                    </div>
                    <a>
                        Reddit post title
                    </a>
                    <div className="post-media-container">

                    </div>
                </article>
            </div>
        </main>
    );
}