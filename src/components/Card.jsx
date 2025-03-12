import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Card = ({ id, name }) => {
    const { store, actions } = useContext(Context);//usecontext accedo a datos almacenados en global context

    // Ver si  ya está en favoritos
    const isFavourite = store.favourites.includes(name);

    return (
        <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <img
                src="https://image.api.playstation.com/vulcan/img/rnd/202105/1714/WHeOu95nW2SZQy6H5IKgE2Bg.png"
                style={{ width: "auto", height: "250px" }}
                alt={name}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-between">
                    <Link to={`/detalles/${id}`} className="btn btn-outline-primary">
                        Learn More!
                    </Link>
                    <button
                        onClick={() => actions.setFavourites(name)}
                        className={`no-border btn ${isFavourite ? "btn-primary" : "btn-warning"}`}
                    >
                        <i className={isFavourite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;