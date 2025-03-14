import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const Cardplanets = ({ id, name }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <img src="https://reviewsyouread.wordpress.com/wp-content/uploads/2021/03/10-more-star-wars-planets-as-countries.png" style={{ width: "auto", height: "150px" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/planetasdetalles/${id}`} className="btn btn-outline-primary">Learn More</Link>
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

export default Cardplanets;