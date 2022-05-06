import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector} from "react-redux";

export default function Login()  {
	const {auth} = useSelector(state => state);

	return (
		<LinkContainer to={auth ? "/profile" :"/login"}>
			<div>{auth ? "User" : "Log in"}</div>
		</LinkContainer>
	);
}