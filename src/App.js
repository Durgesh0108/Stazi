import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarList from "./CarList";
import CarDetails from "./CarDetails";


const router = createBrowserRouter([
	{
		path: "/cars/page/",
		element: <CarList />,
	},
	{
		path: "/car/:id",
		element: <CarDetails />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
