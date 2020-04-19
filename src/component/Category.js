import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Category = () => {

	const [category , setCategory] = useState([]);

	useEffect(()=>{
		const fetchData = async () => {
			let ignore = false;
			const categoryData = await fetch('https://5e99fcbdbc561b0016af3b25.mockapi.io/category',{
				method: "GET",
				headers: {'Content-Type': 'application/json'}
			});

			let categoryJson = await categoryData.json();
			setCategory(categoryJson);
			return () => { ignore = true };
		}
		fetchData();
	}, []);

	return (
		<div className="category">
			{
				category.map(category => (
					<Link to={'/category/' + category.name}  color="success" key={category.id} style={{margin: "10px"} }> {category.name}</Link>
				))
			}
		</div>
	);
}

export default Category;