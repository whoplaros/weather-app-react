import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<p>Holy shit! It's working!</p>
				<Weather city="Paris" />
			</header>
		</div>
	);
}

export default App;
