import React, { useState } from "react";
import cars from "./data";
import { Link } from "react-router-dom";
import { BsSearch, BsSpeedometer2 } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { PiSteeringWheelBold } from "react-icons/pi";
import Card from "./Components/Card/Card";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./CarList.css";

const ITEMS_PER_PAGE = 6;

function CarList() {
	const [data, setData] = useState(cars);
	const [searchVal, setSearchVal] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const indexOfLastCar = currentPage * ITEMS_PER_PAGE;
	const indexOfFirstCar = indexOfLastCar - ITEMS_PER_PAGE;
	const currentCars = data.slice(indexOfFirstCar, indexOfLastCar);

	

	function handleSearchClick() {
		if (searchVal === "") {
			setData(cars);
			return;
		}
		const filterBySearch = cars.filter((car) => {
			if (car.name.toLowerCase().includes(searchVal.toLowerCase())) {
				return car;
			}
		});
		setData(filterBySearch);
	}

	let totalPages = 0;

	if (data.length <= 60) {
		totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
	} else {
		totalPages = 10;
	}

	const renderPageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		renderPageNumbers.push(
			<li
				key={i}
				className={`rounded-lg ${
					i === currentPage ? "bg-base" : "bg-white"
				}`}
			>
				<button onClick={() => setCurrentPage(i)} className="p-1 px-3">
					{i}
				</button>
			</li>
		);
	}

	

	return (
		<div className="p-4 bg-slate-100">
			<div className="flex bg-slate-200 mb-5 p-3 rounded-xl justify-start gap-5 items-center h-12">
				<div className="flex items-center">
					<input
						className="p-1 rounded-xl"
						onChange={(e) => setSearchVal(e.target.value)}
						placeholder="Search..."
					></input>
					<BsSearch
						onClick={handleSearchClick}
						className="relative -left-6"
					/>
				</div>
				<div className="flex items-center">
					<span>Relevance</span>
					<BiChevronDown />
				</div>
				<div className="flex items-center">
					<span>All Brands</span>
					<BiChevronDown />
				</div>
			</div>
			<ul className="grid grid-cols-3 gap-4">
				{currentCars.map((item) => (
					<Link to={`/car/${item.id}`}>
						<Card>
							<li key={item.id}>
								<div className="h-[300px] w-full border-black border-2 mb-4 rounded-lg">
									<img
										className="img rounded-lg"
										src={`/img/${item.image}`}
										alt=""
									/>
								</div>
								<div className="flex justify-between">
									<span className="font-medium text-xl">
										{item.name}
									</span>
									<span className="border-dashed border-2 border-base rounded-2xl p-1 px-2">
										{item.modelYear}
									</span>
								</div>
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
											<BsSpeedometer2
												fill="#1976D2"
												size="27px"
											/>
											<span>{item.seats} People</span>
										</div>
										<div className="flex gap-1">
											<PiSteeringWheelBold
												fill="#1976D2"
												size="27px"
											/>
											<span>{item.fuel_type}</span>
										</div>
									</div>
								</div>
								<hr className="border-black opacity-20 my-4" />
								<div className="flex justify-between">
									<div className="font-medium">
										<span className="text-2xl">
											${item.price_per_month}
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
							</li>
						</Card>
					</Link>
				))}
			</ul>
			<div className="pagination bg-slate-200 p-4 mt-4 rounded-2xl">
				<ul className="page-numbers flex gap-2 justify-center ">
					{renderPageNumbers}
				</ul>
			</div>
		</div>
	);
}

export default CarList;
