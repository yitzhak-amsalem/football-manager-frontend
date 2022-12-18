import './css/App.css';

import {useEffect, useState} from "react";
import {BrowserRouter, NavLink, Route, Routes, Switch} from "react-router-dom";
import LeagueTable from "./components/LeagueTable";
import LeagueTableLive from "./components/LeagueTableLive";
import LiveGames from "./components/LiveGames";
import UserControl from "./components/UserControl";

function App() {

    return(
        <div>
            <BrowserRouter>
                <NavLink className={"active-menu"} to="/"> liveGames </NavLink>
                <NavLink className={"active-menu"} to="/leagueTable"> leagueTable </NavLink>
                <NavLink className={"active-menu"} to="/liveLeagueTable"> liveLeagueTable </NavLink>
                <NavLink className={"active-menu"} to="/userControl"> UserControl </NavLink>


                <Routes>
                    <Route path={"/"} element={<LiveGames/>}/>
                    <Route path={"/leagueTable"} element={<LeagueTable/>}/>
                    <Route path={"/liveLeagueTable"} element={<LeagueTableLive/>}/>
                    <Route path={"/userControl"} element={<UserControl/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;