import React from "react";
import cars from "./data";
import { useParams } from "react-router-dom";
import Card from "./Components/Card/Card";
import Image from "./Components/Image/Image";
import CarModel from "./Components/AboutCars/Model/CarModel";
import CarDescription from "./Components/AboutCars/Description/CarDescription";
import Rent from "./Components/AboutCars/Rent/Rent";

const CarDetails = () => {
	const { id } = useParams();
	const car = cars.find((car) => car.id === parseInt(id));

	return (
		<Card className="p-4 bg-slate-100 rounded-none">
			<Card className="m-4">
				<div key={car.id}>
						<Image item={car} height={"h-[630px]"}/>
						<CarModel item={car} />
						<CarDescription item={car} />
						<hr className="border-black opacity-20 my-4" />
						<Rent item={car} />
					
				</div>
			</Card>
		</Card>
	);
};

export default CarDetails;
