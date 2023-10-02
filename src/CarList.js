import React, { useState } from "react";
import cars from "./data";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import Card from "./Components/Card/Card";
import "./CarList.css";
import Image from "./Components/Image/Image";
import CarModel from "./Components/AboutCars/Model/CarModel";
import CarDescription from "./Components/AboutCars/Description/CarDescription";
import Rent from "./Components/AboutCars/Rent/Rent";

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
		<Card className="p-4 bg-slate-100 rounded-none">
			<Card className="flex bg-slate-200 mb-5 p-3 rounded-xl justify-start gap-5 items-center h-12">
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
			</Card>
			<ul className="grid grid-cols-3 gap-4">
				{currentCars.map((item) => (
					<Link to={`/car/${item.id}`}>
						<Card>
							<li key={item.id}>
								<Image item={item} height={"h-[300px]"}/>
								<CarModel item={item} />
								<CarDescription item={item} />
								<hr className="border-black opacity-20 my-4" />
								<Rent item={item} />
							</li>
						</Card>
					</Link>
				))}
			</ul>
			<Card className="pagination bg-slate-200 p-4 mt-4 rounded-2xl">
				<ul className="page-numbers flex gap-2 justify-center ">
					{renderPageNumbers}
				</ul>
			</Card>
		</Card>
	);
}

export default CarList;
