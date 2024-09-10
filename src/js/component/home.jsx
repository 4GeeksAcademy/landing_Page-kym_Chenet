import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import { List } from "./List";
import Cartitas from "../Cartitas";




//include images into your bundle

//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<List>{Cartitas}</List>
		</div>
	);
};

export default Home;
