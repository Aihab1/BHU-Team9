import React from 'react';
import Drawer from '../drawer/drawer'
import Navbar from '../navbar/navbar'
import * as classes from './dashboard.module.css'
import { hashedData } from '../../library/modules/reader/reader'

const dashboard = () => {
    // Work on hashedData
    console.log(hashedData)
    return (
        <div className={classes.outerDiv}>
            <Drawer />
            <div className={classes.dashboard}>
                <Navbar />
                <div className={classes.innerDash}>
                    <div className={classes.innerDiv}>
                        <div className={classes.infoButtons}>
                            <h1>Good Morning.</h1>
                            <p>Here's what's going on with stocks today.</p>
                            <div className={classes.filter}>
                                <input placeholder="Search"></input>
                                <div className={classes.monthFilter}>
                                    Filter by date:
                                    <input type="month"></input>
                                    to
                                    <input type="month"></input>
                                </div>
                            </div>
                        </div>
                        <div className={classes.chart}>
                            <div></div>
                            <div></div>
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
    );
}

export default dashboard;