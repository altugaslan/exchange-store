import React from "react";
import { useParams } from "react-router-dom";

const Useparams = () => {
	const { id } = useParams();

	return (
		<div>
			<blockquote>
				This page is developing process, thanks for your consideration
			</blockquote>
			<h3>id: {id}</h3>
		</div>
	);
};

export default Useparams;
