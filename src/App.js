import React from "react";
import "./App.css";

import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<WeatherSearch />

			<main>
				<Weather />
				<WeatherForecast />
			</main>
			<Footer />
		</div>
	);
}

export default App;
