import WaterLevel from "./components/WaterLevel";
import bathtub from "./images/bathtub.png";
import React, { useState } from "react";

function App() {

    // define count setup function so only runs once
    function countInitial() {
        return 5
    }

    // setup hooks (count and button disabled)
    let [count, setCount] = useState(() => countInitial());
    let [disable, setDisable] = useState(false);

    // group bathtub div's
    let bathtubDivs = document.getElementsByClassName("water_levels");

    // define function to decrease water level
    function DrainHandler() {

        setDisable(true)

        let drainInterval = setInterval(() => {

            if (count >= 0 && count < 5) {
                bathtubDivs[count].className = "empty water_levels";
                setCount(count = count + 1)
            } else if(count === 5) {
                clearTimeout(drainInterval)
                setDisable(false)
            }
        }, 2000);
    }

    // define function to increase water level
    function FillHandler() {

        setDisable(true)

        let fillInterval = setInterval(() => {

            if (count > 0 && count <= 5) {
                bathtubDivs[count - 1].className = "filled water_levels";
                setCount(count = count - 1)
            } else if(count === 0) {
                clearTimeout(fillInterval)
                setDisable(false)
            }
        }, 2000)
    };

  return (
  
    <div className="card mx-auto">
        <h3 className="card-title">Bathtub Project - SAGE Application</h3>
        <p className="card-text">This page increases/decreases bathtub water level. By pressing the buttons the bathtub will fill/ drain with water every 2 seconds. Have fun!</p>
        <div className="card-body mx-auto">
            <button onClick={FillHandler} disabled={disable} className="btn btn-primary">Increase Water Level</button>
            <button onClick={DrainHandler} disabled={disable} className="btn btn-primary">Decrease Water Level</button>
            <div className="counter mx-auto">
                <h5>Water Level</h5>
                <h6>{5 - count}</h6>
            </div>
        </div>
        <img src={bathtub} className= "bathtub" alt="bathtub" />
        <div className="bathtub mx-auto">
            <WaterLevel text="level5"/>
            <WaterLevel text="level4"/>
            <WaterLevel text="level3"/>
            <WaterLevel text="level2"/>
            <WaterLevel text="level1"/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default App;