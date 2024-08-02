import React, { useContext, useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import StoreContext from "../store";

const Content = () => {
    const context = useContext(StoreContext);
	const [amount, setAmount] = useState(1);
	const [currency, setCurrency] = useState("USD");
    const [result, setResult] = useState(0)

    const { currencies } = context;
    const currencyArr = Object.keys(currencies);


    useEffect( ()=>{
        const val = (amount / currencies[currency]).toFixed(2);
        setResult(val);
        
    }, [amount, currency])

	return (
		<div>
			<InputGroup className="mb-3">
				<Form.Control
					placeholder="Type amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>

				<Form.Select
					value={currency}
					onChange={(e) => setCurrency(e.target.value)}
				>
                    {currencyArr.map(item=> <option key={item}>{item}</option>)}
					
				</Form.Select>

				<InputGroup.Text>{result}₺</InputGroup.Text>
			</InputGroup>
		</div>
	);
};

export default Content;
