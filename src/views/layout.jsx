import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "../components/scrollToTop";
import ScrollToTop from "../components/ScrollToTop";

import Home from "./Home";
import  Demo  from "./Demo";
import  Single  from "./Single";
import injectContext from "../store/appContext";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Detalles from "./Detalles";
import Planetasdetalles from "./Planetasdetalles";
import Vehiculosdetalles from "./Vehiculosdetalles";
import Personajesdetalles from "./Personajesdetalles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = import.meta.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/personajesdetalles/:id" element={<Personajesdetalles />} />
						<Route path="/planetasdetalles/:id" element={<Planetasdetalles />} />
						<Route path="/vehiculosdetalles/:id" element={<Vehiculosdetalles />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);