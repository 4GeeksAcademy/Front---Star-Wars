import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Personajesdetalles = () => {
    const { id } = useParams(); // saco la id de la URL
    const { store } = useContext(Context); // Entro al contexto global, donde esta toda la informacion
    const characters = store.characters.find(plans => plans.uid === id); // entro en store, busco character que sea = a una id

    if (!characters) {
        return <p>Planet not found</p>; // si character distinto que una id devolver mensaje
    }

    return (
        <div className="d-flex ">
            <img src="https://i.pinimg.com/236x/0e/e4/04/0ee404393dbaec4cee40a4556710dd7e.jpg" style={{ width: "400px", height: "250px" }} />
            <div >
                <h1>{characters.name}</h1>
                <p>Details about {characters.name} will go here.</p>
            </div>
        </div>
    );
};



export default Personajesdetalles;