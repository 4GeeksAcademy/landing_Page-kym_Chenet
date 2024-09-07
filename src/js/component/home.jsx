import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import List from "./List";
import Cards from "../Cards";



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
