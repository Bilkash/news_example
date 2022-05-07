import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {Container, Nav, Navbar} from "react-bootstrap";
import Login from "../Login";
import {useSelector} from "react-redux";

import "./index.css";

export default function Layout({children}) {
	const {auth} = useSelector(state => state);

	return (
		<div>
			<Navbar bg="ligth" expand="lg">
				<Container>
					<LinkContainer to={"/"}>
						<Navbar.Brand>NEWS example</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<LinkContainer to={"/"}>
								<div className={"item"}>
									Home
								</div>
							</LinkContainer>

							<LinkContainer to={"/news"}>
								<div className={"item"}>
									News
								</div>
							</LinkContainer>

							<LinkContainer to={auth ? "/profile" :"/login"}>
								<div className={"item"}>
									{"Profile"}
								</div>
							</LinkContainer>
						</Nav>

						<Login/>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container>
				{children}
			</Container>
		</div>
	);
}