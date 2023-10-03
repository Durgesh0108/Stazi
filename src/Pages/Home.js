import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<button className="bg-base rounded-xl p-2 px-4">
				<Link to={"/cars"}>All Cars</Link>
			</button>
		</div>
	);
};

export default Home;
