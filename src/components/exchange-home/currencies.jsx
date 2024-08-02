import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import StoreContext from "../../store";

const Currencies = () => {
	const context = useContext(StoreContext);

	const { currencies } = context;
	const currencyArr = Object.entries(currencies);

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				Exchange Rates
			</Dropdown.Toggle>

			<Dropdown.Menu style={{height:"70vh", overflowY:"scroll"}}>
				{currencyArr.map((item) => (
					<Dropdown.Item key={item[0]}>{item[0]} { (1/item[1]).toFixed(2)}</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default Currencies;
