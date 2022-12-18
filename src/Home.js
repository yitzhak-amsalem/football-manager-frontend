import './css/App.css';

import {useEffect, useState} from "react";
import {BrowserRouter, NavLink, Route, Routes, Switch} from "react-router-dom";
import Increment from "./components/Increment";
import CustomInput from "./components/CustomInput";
import Callback from "./components/callback";
import Game from "./components/Game";
import LeagueTable from "./test/LeagueTable";

function Home() {
    const menuClass = ({isActive}) => (isActive? "active-menu" : "non-active-menu");
    useEffect(() => {
        console.log("hello Home!")
        return () => { console.log("unmount")}
    },[])
    return(
        <div>
            <BrowserRouter>
                <NavLink className={menuClass} to="/live"> increment </NavLink>
                <NavLink className={menuClass} to="/leagueTable"> CustomInput </NavLink>
                <NavLink className={menuClass} to="/liveLeagueTable"> Game </NavLink>

                <Routes>
                    <Route path={"/live"} element={live}/>
                    <Route path={"/leagueTable"} element={leagueTable}/>
                    <Route path={"/liveLeagueTable"} element={liveLeagueTable}/>
                </Routes>
            </BrowserRouter>
            </div>
    )
}


export default Home;