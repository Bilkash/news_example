import React from "react";
import { LinkContainer } from "react-router-bootstrap";

export default function Login() {
	const auth = localStorage.getItem("news_auth");

	return (
		<LinkContainer to={auth ? "/profile" :"/login"}>
			<div>{auth ? "User" : "Log in"}</div>
		</LinkContainer>
	);
}