import React from 'react';
import { Link } from 'react-router-dom';

const SetDestination = () => {
    return (
        <div className=" w-75 pt-5 m-auto">
            <form>
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
                        <Link to="/home"><button className="btn btn-danger d-block mt-3">Search</button></Link>

                    </form>
        </div>
    );
};

export default SetDestination;