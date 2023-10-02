import React from 'react'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const Rent = ({item}) => {
  return (
		<div className="flex justify-between">
			<div className="font-medium">
				<span className="text-2xl">${item.price_per_month}</span>
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
  );
}

export default Rent
