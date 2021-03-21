import React from 'react';
import { useHistory } from 'react-router';
import './Rider.css';

const Rider = (props) => {
    const {image, name, id} = props.rider;
    const history = useHistory();
    const handleDestination = (id) =>{
        const url = `/destination/${id}`;
        history.push(url);
    }
    return (
        <div onClick={() => handleDestination(id)} className="col-md-2 transport">
            <img src={image} alt=""/>
            <br/>
            <h3 className="mt-3">{name}</h3>
        </div>
    );
};

export default Rider;