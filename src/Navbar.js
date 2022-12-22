import {Link, Route, useMatch, useResolvedPath} from "react-router-dom";
import './css/App.css';


export default function Navbar() {
    const projectUrl = "https://github1s.com/yitzhak-amsalem/football-manager-frontend/blob/HEAD/src/App.js"
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">LiveGames</CustomLink>
                <CustomLink to="/leagueTable">LeagueTable</CustomLink>
                <CustomLink to="/liveLeagueTable">LeagueTableLive</CustomLink>
                <CustomLink to="/userControl">UserControl</CustomLink>
            </ul>
            <div className="site-title">
                <a rel={"noreferrer noopener"} target={"_blank"} href={projectUrl} id={"title"}>
                    Live365
                </a>
            </div>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
