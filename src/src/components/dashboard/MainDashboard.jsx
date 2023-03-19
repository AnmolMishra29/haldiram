import React, { useContext } from 'react';
import { Grid, Button } from '@mui/material';
import './MainDashboard.css'
import HalidramContext from '../../context/Haldiramcontext/HaldiramContext';
import { Link } from 'react-router-dom';


const MainDashboard = () => {

    const { mall } = useContext(HalidramContext);

    console.log(mall);

    return (
        <div>

            <Grid container spacing={2} style={{ marginTop: '8vh' }}>
                {mall && mall.map((el, index) => {
 
                        let path = `/${el.name}/${index}`
                    return (

                        <Grid item xs={12} sm={12} md={6} key={index}>
                            <div className='regionContainer'>
                                <div className='titleSectionMainDashboard'>
                                    <div> <b>Halidram's {el.name} </b></div>
                                    <div> <b>Real Time Alarms </b> </div>
                                    <div className='goToRegion'> <Link to={path} style={{ textDecoration:"none"}}> <Button variant="contained" size="small"><i className="fa-solid fa-arrow-right-long"></i></Button> </Link></div>
                                </div>
                                <div className='Allmallregion'>
                                    {el.stores.map((store, index) => {
                                        return (

                                            <div className="regionMall" key={index}>
                                                <div className="mallcircle"> {store.alarmno}</div>
                                                <div className="mallname"> {store.name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </Grid>
                    )
                })}
                {/* <Grid xs={12} sm={12} md={6}>
                    <div className='regionContainer'></div>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                    <div className='regionContainer'></div>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                    <div className='regionContainer'></div>
                </Grid> */}

            </Grid>

        </div>
    )
}

export default MainDashboard