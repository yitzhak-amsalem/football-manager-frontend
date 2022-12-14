import './css/App.css';

import {useEffect, useState} from "react";
import {BrowserRouter, NavLink, Route, Routes, Switch} from "react-router-dom";
import Increment from "./components/Increment";
import CustomInput from "./components/CustomInput";
import Callback from "./components/callback";
import Game from "./components/Game";
import LeagueTable from "./test/LeagueTable";

function Home() {
    useEffect(() => {
        console.log("hello Home!")
        return () => { console.log("unmount")}
    },[])
    return(
        <div>Home</div>
    )
}

function App() {
    const menuClass = ({isActive}) => (isActive? "active-menu" : "non-active-menu");


    /*    state = {
            text: "text",
            UIColor: null,
            number: 0


        getColor = (color) => {
            this.setState({
                UIColor: color
            })
        }
        changeText = (e) => {
            this.setState({
                text: e.target.value
            })
        }
        changeNumber = (number) => {
            //let number = this.state.number + 1
            this.setState({
                number: number
            })
        }
        inPlace = (e) => {
            return (<p style={{ background: "black",width: "3em", height: "3em", margin: "3px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <span style={{display: "flex", justifyContent: "center", alignItems: "center",
                    textAlign: "center", color: "white"}}>{e}</span>
            </p>)
        }
        inPlaceArr = (num) => {
            let arr = [];
            for (let i = 0; i < num; i++){
                arr.push(this.inPlace(i.toString()))
                console.log(i.toString())
            }
            return arr;
        }*/

    return (
        <div>


            <BrowserRouter>
                <NavLink className={menuClass} to="/"> Home </NavLink>
                <NavLink className={menuClass} to="/increment"> increment </NavLink>
                <NavLink className={menuClass} to="/custom-input"> CustomInput </NavLink>
                <NavLink className={menuClass} to="/game"> Game </NavLink>
                <NavLink className={menuClass} to="/callback"> Callback </NavLink>

                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/increment"} element={<Increment/>}/>
                    <Route path={"/custom-input"} element={<CustomInput/>}/>
                    <Route path={"/game"} element={<Game/>}/>
                    <Route path={"/callback"} element={<Callback/>}/>
                </Routes>
            </BrowserRouter>



            {/*                <CustomInput text={this.state.text} updateFunc={this.changeText}/>
                <h1>
                    The number is: {this.state.number}
                </h1>
                <Increment number={this.state.number} updateNumber={this.changeNumber}/>

                <div style={{background: `${this.state.UIColor}`, width: "40px", height: "40px"}}>
                </div>

                <Callback getColor={this.getColor}/>*/}

        </div>
    )


}

export default App;