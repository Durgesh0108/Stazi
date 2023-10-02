import React from "react";
import { BsSpeedometer2 } from "react-icons/bs";

import { PiSteeringWheelBold } from "react-icons/pi";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";

const CarDescription = ({ item }) => {
	return (
		<div>
			<div className="grid grid-cols-2">
				<div className="flex gap-1">
					<PeopleOutlineOutlinedIcon color="primary" />
					<span>{item.seats} People</span>
				</div>
				<div className="flex gap-1">
					<LocalGasStationOutlinedIcon color="primary" />
					<span>{item.fuel_type}</span>
				</div>
			</div>
			<div className="grid grid-cols-2">
				<div className="flex gap-1">
					<BsSpeedometer2 fill="#1976D2" size="27px" />
					<span>{item.mileage}km / 1-litre</span>
				</div>
				<div className="flex gap-1">
					<PiSteeringWheelBold fill="#1976D2" size="27px" />
					<span>{item.fuel_type}</span>
				</div>
			</div>
		</div>
	);
};

export default CarDescription;
