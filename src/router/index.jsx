import { BrowserRouter, Route, Routes } from "react-router-dom";
import WalletCreation from "../components/wallet";
import UserCreation from "../components/register";
import AquireUserToken from "../components/aquireToken";
import InitializeUser from "../components/initialize";
import Header from "../components/exchange-home/header";
import Footer from "../components/exchange-home/footer";
import { Container } from "react-bootstrap";
import Home from "../components/exchange-home/home";
import Useparams from "../components/exchange-routing/useparams";
import Usenavigate from "../components/exchange-routing/usenavigate";
import Exchange from "../components";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div className="d-flex flex-column h-100">
				<Header />
				<Container className="py-3 flex-grow-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create-user" element={<UserCreation />} />
						<Route path="/user-controlled-wallet" element={<WalletCreation />} />
						<Route path="/acquire-session-token" element={<AquireUserToken />} />
						<Route path="/initialize-user" element={<InitializeUser />} />
						<Route path="/useparams/:id" element={<Useparams />} />
						<Route path="/usenavigate" element={<Usenavigate />} />
						<Route path="/exchange" element={<Exchange />} />
					</Routes>
				</Container>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;
