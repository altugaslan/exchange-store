import React, { useEffect, useState } from "react";
import AppRouter from "./router";
import StoreContext from "./store";

const App = () => {
  const [currencies, setCurrencies] = useState({});
  const [loading, setLoading] = useState(true)

	const loadCurrencies = async () => {
		try {
			const resp = await fetch(
				"https://api.frankfurter.app/latest?from=TRY"
			);
      if(!resp.ok){
        throw new Error(resp.message);
      }
			const data = await resp.json();
      setCurrencies(data.rates);

		} catch (err) {
			console.log(err);
		}
    finally{
      setLoading(false);
    }
	};

  useEffect( ()=>{
    loadCurrencies();
  }, [])

	
  if(loading) return null;

	return (
		<StoreContext.Provider value={{ currencies }}>
			<AppRouter />
		</StoreContext.Provider>
	);
};

export default App;

