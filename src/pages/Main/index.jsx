import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Main() {
	return (
		<Container>
			<h1>Same example App</h1>

			<div>
				Go to look some <Link to={"/news"}>news</Link>
			</div>
		</Container>
	);
}