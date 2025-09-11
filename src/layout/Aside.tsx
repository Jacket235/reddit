import icons from '../components/Icons';
import TimeAgo from '../functions/TimeAgo';
import './aside.css'

export default function Aside() {
    return(
        <aside>
            <div className="aside-contents">
                <div className="aside-recent-posts">
                    <h3>Recent Posts</h3>
                    <button>Clear</button>
                </div>
                <div className="recent-post">
                    <div className="recent-post-info">
                        <div className="recent-post-subreddit-info">
                            <a>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/subreddit</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">

                        </div>
                    </div>
                    <div className="recent-post-action-row">
                    </div>
                </div>
            </div>
        </aside>
    );
}