import React from "react";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function Main() {
	return (
		<Container>
			<h1>Same example App</h1>

			<div>
				Go to look some <Link to={"/news"}>news</Link>
			</div>

			<div>
				Please, log in for check this functional
			</div>

			<LinkContainer to={"/login"}>
				<Button>
					Log in
				</Button>
			</LinkContainer>
		</Container>
	);
}