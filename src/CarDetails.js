import React from "react";
import cars from "./data";
import { useParams } from "react-router-dom";
import Card from "./Components/Card/Card";
import { BsSpeedometer2 } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const CarDetails = () => {
	const { id } = useParams();
	const car = cars.find((car) => car.id === parseInt(id));

	return (
		<Card className="m-4">
			<div key={car.id}>
				<div className="h-[630px] w-full border-black border-2 mb-4 rounded-lg">
					<img
						className="img rounded-lg"
						src={`/img/${car.image}`}
						alt=""
					/>
				</div>
				<div className="flex justify-between">
					<span className="font-medium text-xl">{car.name}</span>
					<span className="border-dashed border-2 border-base rounded-2xl p-1 px-2">
						{car.modelYear}
					</span>
				</div>
				<div>
					<div className="grid grid-cols-2">
						<div className="flex gap-1">
							<PeopleOutlineOutlinedIcon color="primary" />
							<span>{car.seats} People</span>
						</div>
						<div className="flex gap-1">
							<LocalGasStationOutlinedIcon color="primary" />
							<span>{car.fuel_type}</span>
						</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="flex gap-1">
							<BsSpeedometer2 fill="#1976D2" size="27px" />
							<span>{car.seats} People</span>
						</div>
						<div className="flex gap-1">
							<PiSteeringWheelBold fill="#1976D2" size="27px" />
							<span>{car.fuel_type}</span>
						</div>
					</div>
				</div>
				<hr className="border-black opacity-20 my-4" />
				<div className="flex justify-between">
					<div className="font-medium">
						<span className="text-2xl">
							${car.price_per_month}
						</span>
						<span className="text-sm">/month</span>
					</div>
					<div className="flex gap-2">
						<button className="bg-blue-200 p-1 rounded-lg">
							<FavoriteBorderOutlinedIcon color="primary" />
						</button>
						<button className="bg-base rounded-lg text-white p-1 px-2 font-medium text-sm">
							Rent Now
						</button>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default CarDetails;
