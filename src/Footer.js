import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<div id="footer-container">
				<p>
					This app was coded by{" "}
					<a
						target="_blank"
						href="https://wesleyhoplarosportfolio.netlify.app/"
					>
						Wesley Hoplaros
					</a>
					. It is open-sourced on{" "}
					<a
						target="_blank"
						href="https://github.com/whoplaros/weather-app-react"
					>
						GitHub
					</a>{" "}
					and hosted on{" "}
					<a target="_blank" href="https://asyouwishweather-react.netlify.app/">
						Netlify
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
