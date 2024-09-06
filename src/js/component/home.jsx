import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			< Navbar />
			<Jumbotron />
		</div>
	);
};

export default Home;
