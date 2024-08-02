import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import menu from "./menu.json";
import "./header.scss";
import Currencies from "./currencies";

const Header = () => {
	const { pathname } = useLocation();


	return (
		<Navbar expand={false} className="bg-info mb-3" collapseOnSelect>
			<Container fluid>
				<Navbar.Brand href="#">EXCHANGE STORE</Navbar.Brand>
				
				<Currencies/>

				<Navbar.Toggle aria-controls={`offcanvasNavbar`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar`}
					aria-labelledby={`offcanvasNavbarLabel`}
					placement="start"
				>
					<Offcanvas.Header closeButton className="bg-info">
						<Offcanvas.Title id={`offcanvasNavbarLabel`}>
							EXCHANGE STORE
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{/* Tıklandığında kapanması için Navbar a collapseOnSelect ekledik. Bu özelliğin çalışabilmesi için tüm Nav.Link elere eventKey prop u eklenemlidir. */}
							{menu.map((item, index) => (
								<Nav.Link
									key={item.link}
									active={pathname === item.link}
									eventKey={index}
									as={Link}
									to={item.link}
								>
									{item.title}
								</Nav.Link>
							))}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>


				
			</Container>
		</Navbar>
	);
};

export default Header;
