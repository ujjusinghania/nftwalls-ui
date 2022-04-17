import React, { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import NFTWallsAbout from "./NFTWallsAbout.js";
import NFTWallsCreator from "./NFTWallsCreator.js";

class NFTWallsRoutes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/about" element={<NFTWallsAbout />} />
					<Route path="*" element={<NFTWallsCreator />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default NFTWallsRoutes;
