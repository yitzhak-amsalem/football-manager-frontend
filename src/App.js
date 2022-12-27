import './css/App.css';
import {Route, Routes} from "react-router-dom";
import LeagueTable from "./Pages/LeagueTable";
import LeagueTableLive from "./Pages/LeagueTableLive";
import LiveGames from "./Pages/LiveGames";
import UserControl from "./Pages/UserControl";

import Navbar from "./Navbar"


function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div>
                    <Routes>
                        <Route path={"/"} element={<LiveGames/>}/>
                        <Route path={"/leagueTable"} element={<LeagueTable/>}/>
                        <Route path={"/liveLeagueTable"} element={<LeagueTableLive/>}/>
                        <Route path={"/userControl"} element={<UserControl/>}/>
                    </Routes>
                </div>
            </div>
        </>

    )
}

export default App;