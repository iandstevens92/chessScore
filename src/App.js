import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1 style={{ borderBottom: "1px solid black", paddingBottom: "20px", marginBottom: 0 }}>Chess Score</h1>
			<div style={{ display: "flex", width: "100vw", height: "100vh" }}>
				<div style={{ flex: 1 }}>
					<h2>Mandrew</h2>
					<p>0</p>
				</div>
				<div style={{ flex: 1, borderLeft: "1px solid black" }}>
					<h2>Ian</h2>
					<p>1</p>
				</div>
			</div>
		</div>
	);
}

export default App;
