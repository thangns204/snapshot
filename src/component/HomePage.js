import React, {useEffect, useState} from "react";
import Search from "./Search";
import Image from "./Image";
import './Image.css'

const HomePage = () => {

	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch('https://5e99fcbdbc561b0016af3b25.mockapi.io/image/?filter=French')
			.then(response => response.json())
			.then(jsonResponse => {
				setImages(jsonResponse);
				setLoading(false);
			});
	}, []);

	const search = searchValue => {
		setLoading(true);
		let urlApi = `https://5e99fcbdbc561b0016af3b25.mockapi.io/image/?filter=${searchValue}`;
		console.log(urlApi);

		const fetchData = async () => {
			let ignore = false;
			try {
				const imagesData = await fetch(urlApi, {
					method: 'GET',
					headers: {'Content-Type': 'application/json'},
				})

				let imagesJson = await imagesData.json();
				console.log(imagesJson);
				setImages(imagesJson);
			} catch(e){
				setErrorMessage(e);
			}
			setLoading(false);
			return () => { ignore = true };
		}
		fetchData();
	}


	return (
		<div className="home-page">
			<Search search={search} />
			<div className="images">
				{loading && !errorMessage ? (
					<span>loading...</span>
				) : errorMessage ? (
					<div className="errorMessage">{errorMessage}</div>
				) : (
					images.map((image, index) => (
						<Image key={index} image={image} />
					))
				)}
			</div>
		</div>
	)
}

export default HomePage;
