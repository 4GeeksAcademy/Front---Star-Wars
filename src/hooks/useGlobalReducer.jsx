// // Import necessary hooks and functions from React.
// import { useContext, useReducer, createContext } from "react";
// import storeReducer, { initialStore } from "../store/flux.js"  // Import the reducer and the initial state.

// // Create a context to hold the global state of the application
// // We will call this global state the "store" to avoid confusion while using local states
// const StoreContext = createContext()

// // Define a provider component that encapsulates the store and warps it in a context provider to 
// // broadcast the information throught all the app pages and components.
// export function StoreProvider({ children }) {
//     // Initialize reducer with the initial state.
//     const [store, dispatch] = useReducer(storeReducer, initialStore())
//     // Provide the store and dispatch method to all child components.
//     return <StoreContext.Provider value={{ store, dispatch }}>
//         {children}
//     </StoreContext.Provider>
// }

// // Custom hook to access the global state and dispatch function.
// export default function useGlobalReducer() {
//     const { dispatch, store } = useContext(StoreContext)
//     return { dispatch, store };
// }

import { createContext, useContext, useState, useEffect } from "react";
import getState from "../store/flux.js";

// Create a context
export const Context = createContext(null);

// Provider component
export function StoreProvider({ children }) {
    // State to hold the entire application state
    const [state, setState] = useState({
        store: {
            characters: [],
            favourites: [],
            planets: [],
            vehicles: [],
            one_character: null,
            one_planet: null,
            one_vehicle: null,
        },
        actions: {}
    });
    
    // Set up the flux pattern
    useEffect(() => {
        const flux = getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updatedStore) => 
                setState(prevState => ({
                    store: { ...prevState.store, ...updatedStore },
                    actions: { ...prevState.actions }
                }))
        });
        
        setState({
            store: flux.store,
            actions: flux.actions
        });
    }, []);
    
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
}

// Custom hook to use the store
export default function useStore() {
    return useContext(Context);
}