import './main.css'
import icons from '../components/Icons';

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
        </main>
    );
}