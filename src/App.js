import './App.css';
import {sendApiGetRequest, sendApiPostRequest} from "./ApiRequests";
import Wrapper from "./Wrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import live from "./live";
import leagueTable from "./leagueTable";
import leagueTableLive from "./leagueTableLive";

function App() {



    return (
        <div className="App">
            <Wrapper/>
            <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/leagueTableLive"} element={leagueTableLive}/>
                    <Route path={"/live"} element={live}/>
                    <Route path={"/leagueTable"} element={leagueTable}/>
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
