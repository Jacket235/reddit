import { useEffect, useState } from 'react';
import icons from "../components/Icons"
import './header.css';

export default function Header() {
    const [searchField, setSearchField] = useState<string>("");
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header>
            <div className="left">
                {width <= 1200 && (
                    <button>{icons.nav}</button>
                )}
                {icons.logo}
                {width >= 960 && (
                    icons.reddit
                )}
            </div>
            <div className="mid">
                <div className="input-wrapper">
                    <span>{icons.magnifying_glass}</span>
                    <input type="text" value={searchField} onChange={e => setSearchField(e.target.value)} placeholder="Search Reddit"/>
                    {searchField.length > 0 && (
                        <span style={{right: "14px", cursor: "pointer"}}>{icons.clear}</span>
                    )}
                </div>
            </div>
            <div className="right">
                {width >= 960 && (
                    <a>{icons.advertise}</a>
                )}
                <button>{icons.chat}</button>
                <a style={{padding: "0 15px 0 11px", gap: "8px"}}>
                    {icons.plus_sign}
                    <span>Create</span>
                </a>
                <a>{icons.bell}</a>
                <button style={{padding: "0 4px"}}>{icons.default_avatar}</button>
            </div>
        </header>
    );
}