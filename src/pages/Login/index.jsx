import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";

import "./index.css";

export default function Login() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin () {
		if (password === "12345" && login === "admin") {
			localStorage.setItem("news_auth", "true");

			history.push("/profile");
		}
	}

	return (
		<Container>
			<Form className={"form"}>
				<input
					placeholder={"Username"}
					value={login}
					onChange={(event) => setLogin(event.target.value)}
				/>

				<input
					placeholder={"Password"}
					type={"password"}
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>

				<Button onClick={() => handleLogin()}>
					Log in
				</Button>
			</Form>
		</Container>
	);
}