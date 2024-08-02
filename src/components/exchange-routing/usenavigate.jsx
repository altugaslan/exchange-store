import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Usenavigate = () => {
    const navigate = useNavigate();
    
    
    useEffect(() => {
		const timer = setTimeout(() => {
            navigate("/")
        }, 10000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div>
			<h3>Wait 10 seconds, after that you can see the home page again :))</h3>
		</div>
	);
};

export default Usenavigate;
