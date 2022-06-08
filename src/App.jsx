import React from 'react';
import Cards from "./Cards";
import './index.css';
import series from './Series'

const App=()=>{

    return (
        <>
            <div className="headBar">
                <h2 className="headTitle">My Favourites</h2>
            </div>
            <div class="contain">
                <Cards obj={series[0]} />
                <Cards obj={series[1]}/>
                <Cards obj={series[2]}/>
                <Cards obj={series[3]}/>
                <Cards obj={series[4]}/>
            </div>
        </>
    );
}

export default App;