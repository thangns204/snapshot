import React, {useEffect, useState} from "react";
import './Image.css'

const Image =  ({image}) => {

	return (
		<div className="image">
				<img className="child" width="200px" src={image.avatar}/>
		</div>
	);
}

export default Image;