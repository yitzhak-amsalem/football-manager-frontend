import './css/App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import LeagueTable from "./components/LeagueTable";
import LeagueTableLive from "./components/LeagueTableLive";
import LiveGames from "./components/LiveGames";
import UserControl from "./components/UserControl";
import {useState} from "react";

function App() {
    const [updates, setUpdates] = useState(0);
    const setUpdate = () => {
        setUpdates(prevState => prevState + 1);
    }
    return(
        <div>
            <BrowserRouter>
                <NavLink className={"active-menu"} to="/"> liveGames </NavLink>
                <NavLink className={"active-menu"} to="/leagueTable"> leagueTable </NavLink>
                <NavLink className={"active-menu"} to="/liveLeagueTable"> liveLeagueTable </NavLink>
                <NavLink className={"active-menu"} to="/userControl"> UserControl </NavLink>


                <Routes>
                    <Route path={"/"} element={<LiveGames update={updates}/>}/>
                    <Route path={"/leagueTable"} element={<LeagueTable/>}/>
                    <Route path={"/liveLeagueTable"} element={<LeagueTableLive update={updates}/>}/>
                    <Route path={"/userControl"} element={<UserControl setUpdate={setUpdate}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;