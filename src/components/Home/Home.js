import React, { useEffect, useState } from 'react';
import rideInfo from '../../fakeData/data.json';
import Rider from '../Rider/Rider';
import background from '../../images/road1.jpg'
import './Home.css';


const Home = () => {
    const [riders, setRiders] = useState([]);
    useEffect(() => {
        setRiders(rideInfo);
    }, [])
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="background">
            <div className="transport-container">
                <div className="row text-center">
                    {
                        riders.map(rider => <Rider rider={rider}></Rider>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;