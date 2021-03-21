import React, { useState } from 'react';
import { useParams } from 'react-router';
import data from '../../fakeData/data.json';
import icon from '../../images/peopleicon.png';
import GoogleMap from '../GoogleMap/GoogleMap';
import './Destination.css'


const Destination = () => {
    let { id } = useParams();
    const [vehicleInfo, setVehicleInfo] = useState({});
    const riderDetail = data.find(vehicle => vehicle.id.toString() === id.toString());
    console.log(riderDetail);

    const [isShow, setIsShow] = useState(false);

    return (
        <div className="row m-5">
            <div className="col-md-4">
                {
                    isShow === false ? <form>
                        <label htmlFor="pickFrom" >Pick from</label>
                        <br />
                        <input type="text" id="pickFrom" placeholder="enter your location" />
                        <br />
                        <label htmlFor="pickTo">Pick To</label>
                        <br />
                        <input type="text" id="pickTo" placeholder="enter your destination" />
                        <br />
                        <label>Date</label>
                        <br />
                        <input type="date" />
                        <button onClick={() => {
                            setVehicleInfo(riderDetail)
                            setIsShow(true)
                        }} className="btn btn-danger d-block mt-3">Search</button>

                    </form> :
                        <div className="destination-container">
                            <div className="location">
                                <h5>From: Agrabad</h5>
                                <br/>
                                <h5>To: Hathazari</h5>
                            </div>
                            <div class="row vehicle-container">
                                <div class="col d-flex">
                                    <img src={vehicleInfo.image} alt=""/> <h5 className="ml-2 mt-1">{vehicleInfo.name}</h5>
                                </div>
                                <div class="col people-icon d-flex">
                                <img src={icon} alt=""/><h5 className="mt-1 ml-2">4</h5>
                                 </div>
                                <div class="col">
                                    <h5 className="mt-1 ml-2">$60</h5>
                                </div>
                            </div>
                            <div class="row vehicle-container mt-2">
                                <div class="col d-flex">
                                    <img src={vehicleInfo.image} alt=""/> <h5 className="ml-2 mt-1">{vehicleInfo.name}</h5>
                                </div>
                                <div class="col people-icon d-flex">
                                <img src={icon} alt=""/><h5 className="mt-1 ml-2">4</h5>
                                 </div>
                                <div class="col">
                                    <h5 className="mt-1 ml-2">$60</h5>
                                </div>
                            </div>
                            <div class="row vehicle-container mt-2">
                                <div class="col d-flex">
                                    <img src={vehicleInfo.image} alt=""/> <h5 className="ml-2 mt-1">{vehicleInfo.name}</h5>
                                </div>
                                <div class="col people-icon d-flex">
                                <img src={icon} alt=""/><h5 className="mt-1 ml-2">4</h5>
                                 </div>
                                <div class="col">
                                    <h5 className="mt-1 ml-2">$60</h5>
                                </div>
                            </div>
                        </div>

                }
            </div>
            <div className="col-md-6 g-map">
                <GoogleMap/>
                
            </div>

        </div>
    );
};

export default Destination;