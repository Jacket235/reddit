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
                            <a href=''>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/youtube</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">
                            <a>
                                <span>Video not uploading in HD</span>
                            </a>
                        </div>
                    </div>
                    <div className="recent-post-action-row">
                        <span>3 upvotes </span>
                        <span>·</span>
                        <span> 9 comments</span>
                    </div>
                </div>
                <hr></hr>
                <div className="recent-post">
                    <div className="recent-post-info">
                        <div className="recent-post-subreddit-info">
                            <a href=''>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/premiere</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">
                            <a>
                                <span>How to Maintain Original Quality When Exporting in Premiere Pro?</span>
                            </a>
                        </div>
                    </div>
                    <div className="recent-post-action-row">
                        <span>1 upvote </span>
                        <span>·</span>
                        <span> 12 comments</span>
                    </div>
                </div>
                <hr></hr>
                <div className="recent-post">
                    <div className="recent-post-info">
                        <div className="recent-post-subreddit-info">
                            <a href=''>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/github</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">
                            <a>
                                <span>How to get started with Github Desktop?</span>
                            </a>
                        </div>
                    </div>
                    <div className="recent-post-action-row">
                        <span>1 comment</span>
                    </div>
                </div>
                <hr></hr>
                <div className="recent-post">
                    <div className="recent-post-info">
                        <div className="recent-post-subreddit-info">
                            <a href=''>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/tailwindcss</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">
                            <a>
                                <span>Some tailwind classes just don't seem to work?</span>
                            </a>
                        </div>
                    </div>
                    <div className="recent-post-action-row">
                        <span>8 upvotes </span>
                        <span>·</span>
                        <span> 15 comments</span>
                    </div>
                </div>
                <hr></hr>
                <div className="recent-post">
                    <div className="recent-post-info">
                        <div className="recent-post-subreddit-info">
                            <a href=''>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/youtube</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">
                            <a>
                                <span>Video not uploading in HD</span>
                            </a>
                        </div>
                    </div>
                    <div className="recent-post-action-row">
                        <span>3 upvotes </span>
                        <span>·</span>
                        <span> 9 comments</span>
                    </div>
                </div>
                <hr></hr>
                <div className="recent-post">
                    <div className="recent-post-info">
                        <div className="recent-post-subreddit-info">
                            <a href=''>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/premiere</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">
                            <a>
                                <span>How to Maintain Original Quality When Exporting in Premiere Pro?</span>
                            </a>
                        </div>
                    </div>
                    <div className="recent-post-action-row">
                        <span>1 upvote </span>
                        <span>·</span>
                        <span> 12 comments</span>
                    </div>
                </div>
                <hr></hr>
                <div className="recent-post">
                    <div className="recent-post-info">
                        <div className="recent-post-subreddit-info">
                            <a href=''>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/github</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">
                            <a>
                                <span>How to get started with Github Desktop?</span>
                            </a>
                        </div>
                    </div>
                    <div className="recent-post-action-row">
                        <span>1 comment</span>
                    </div>
                </div>
                <hr></hr>
                <div className="recent-post">
                    <div className="recent-post-info">
                        <div className="recent-post-subreddit-info">
                            <a href=''>
                                <span>{icons.default_subreddit_icon_aside} </span>
                                <span>r/youtube</span>
                            </a>
                            <span>•</span>
                            <TimeAgo date="2025-09-11T01:56:00" />
                        </div>
                        <div className="recent-post-title">
                            <a>
                                <span>Video not uploading in HD</span>
                            </a>
                        </div>
                    </div>
                    <div className="recent-post-action-row">
                        <span>3 upvotes </span>
                        <span>·</span>
                        <span> 9 comments</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}