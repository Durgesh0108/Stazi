import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarList from "./Pages/CarList";
import CarDetails from "./Pages/CarDetails";

const router = createBrowserRouter([
	{
		path: "/cars",
		children: [
			{
				index: true,
				element: <CarList />,
			},
			{
				path: ":id",
				element: <CarDetails />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
