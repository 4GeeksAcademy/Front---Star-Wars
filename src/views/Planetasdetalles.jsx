import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Detailsplanets = () => {
    const { id } = useParams(); // saco la id de la URL
    const { store } = useContext(Context); // Entro al contexto global, donde esta toda la informacion
    const planets = store.planets.find(plans => plans.uid === id); // entro en store, busco character que sea = a una id

    if (!planets) {
        return <p>Planet not found</p>; // si character distinto que una id devolver mensaje
    }

    return (
        <div className="d-flex ">
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg" style={{ width: "400px", height: "150px" }} />
            <div >
                <h1>{planets.name}</h1>
                <p>Details about {planets.name} will go here.</p>
            </div>
        </div>
    );
};



export default Detailsplanets;