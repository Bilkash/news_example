import React from "react";
import {Button, Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {logOut} from "../../redux/authSlice";
import {useNavigate} from "react-router";

export default function Profile() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleLogOut () {
		localStorage.setItem("news_auth", "false");
		dispatch(logOut());
		navigate("/login");
	}

	return (
		<Container>
			<h1>
				Profile
			</h1>

			<div>
				You already log in. Cool.
			</div>

			<Button onClick={() => handleLogOut()}>
				Log out
			</Button>
		</Container>
	);
}