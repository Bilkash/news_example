import React from "react";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function Main() {
	const authLS = localStorage.getItem("news_auth");

	return (
		<Container>
			<h1>Same example App</h1>

			<div>
				Go to look some <Link to={"/news"}>news</Link>
			</div>

			<div>
				Please, log in for check this functional
			</div>

			<LinkContainer to={authLS && authLS === "true" ? "/profile" : "/login"}>
				<Button>
					Log in
				</Button>
			</LinkContainer>
		</Container>
	);
}