import './css/App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import LeagueTable from "./components/LeagueTable";
import LeagueTableLive from "./components/LeagueTableLive";
import LiveGames from "./components/LiveGames";
import UserControl from "./components/UserControl";
import {useState} from "react";

import Navbar from "./Navbar"


function App() {
    const [updates, setUpdates] = useState(0);
    const setUpdate = () => {
        setUpdates(prevState => prevState + 1);
    }
    return (
        <>
            <Navbar/>
            <div className="container">
                <div>
                    <Routes>
                        <Route path={"/"} element={<LiveGames update={updates}/>}/>
                        <Route path={"/leagueTable"} element={<LeagueTable/>}/>
                        <Route path={"/liveLeagueTable"} element={<LeagueTableLive update={updates}/>}/>
                        <Route path={"/userControl"} element={<UserControl setUpdate={setUpdate}/>}/>
                    </Routes>
                </div>
            </div>
        </>

    )
}

export default App;