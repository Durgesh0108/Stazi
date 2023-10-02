import React from 'react'
import "./../../CarList.css";

const Image = ({item, height}) => {
  return (
		<div className={`w-full border-black border-2 mb-4 rounded-lg ${height}`}>
			<img className="img rounded-lg" src={`/img/${item.image}`} alt="" />
		</div>
  );
}

export default Image
