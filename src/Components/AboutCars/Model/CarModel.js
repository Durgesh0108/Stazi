import React from 'react'

const CarModel = ({item}) => {
  return (
		<div className="flex justify-between">
			<span className="font-medium text-xl">{item.name}</span>
			<span className="border-dashed border-2 border-base rounded-2xl p-1 px-2">
				{item.modelYear}
			</span>
		</div>
  );
}

export default CarModel
