import React, { useState } from 'react';
import Drawer from '../drawer/drawer'
import Navbar from '../navbar/navbar'
import ChartComponent from '../chart/index'
import * as classes from './dashboard.module.css'
import { hashedData } from '../../library/modules/reader/reader'

const Dashboard = () => {
    // Work on hashedData
    // console.log(hashedData)
    let searchTerms = Object.keys(hashedData)
    const [result, setResult] = useState([]);
    const [chart, setChart] = useState(<div></div>);
    const [searchHistory, setSearchHistory] = useState([]);

    const chartChangedHandler = (symbol) => {
        setSearchHistory([...searchHistory, symbol]);
        // Work with symbol like this
        // setChart(<YourChartComponent symbol={symbol} hashedData={hashedData}/>)
        //console.log(symbol)
    }

    const autocompleteMatch = (input) => {
        if (input === '') {
            return [];
        }
        input = input.toUpperCase()
        let reg = new RegExp(input)
        return searchTerms.filter((term) => {
            if (term.match(reg)) {
                return term;
            }
            return null
        });
    }

    const onTypeHandler = (val) => {
        let terms = autocompleteMatch(val);
        let list = [];
        for (let i = 0; i < terms.length; i++) {
            list.push(terms[i]);
        }
        setResult(list);
    }

    return (
        <div>
            <div className={classes.outerDiv}>
                <Drawer searchHistory={searchHistory} />
                <div className={classes.dashboard}>
                    <Navbar />
                    <div className={classes.innerDash}>
                        <div className={classes.innerDiv}>
                            <div className={classes.infoButtons}>
                                <h1>Good Morning.</h1>
                                <p>Here's what's going on with stocks today.</p>
                                <div className={classes.filter}>
                                    <input placeholder="Search" onChange={(event) => onTypeHandler(event.target.value)}></input>
                                    <div className={classes.monthFilter}>
                                        Filter by date:
                                        <input type="month"></input>
                                        to
                                        <input type="month"></input>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {result.map(symbol => {
                                    return <li key={symbol} onClick={() => chartChangedHandler(symbol)}>{symbol}</li>
                                })}
                            </ul>
                            <div className={classes.chart}>
                                {chart}
                            </div>
                            <div className={classes.chartChanger}>
                                <div>Chart Type 1</div>
                                <div>Chart Type 2</div>
                                <div>Chart Type 3</div>
                                <div>Chart Type 4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Dashboard;
