import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const Cardvehicles = ({ id, name }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <img src="https://www.latercera.com/resizer/v2/M7WCDZQ2FRAORITF5MA6XO3PWM.jpg?quality=80&smart=true&auth=c046aca542d7d96cff4408209fcd4de33d93d20631cc98a877131b3dc4c95f94&width=1200&height=675" style={{ width: "auto", height: "150px" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/vehiculosdetalles/${id}`} className="btn btn-outline-primary">Learn More!</Link>
                    <button
                        onClick={() => actions.setFavourites(name)}
                        className="no-border btn btn-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cardvehicles;