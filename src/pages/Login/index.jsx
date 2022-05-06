import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {logIn} from "../../redux/authSlice";
import {useNavigate} from "react-router";
import LoginError from "../../components/LoginError";

import "./index.css";

export default function Login() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function handleLogin () {
		if (password === "12345" && login === "admin") {
			localStorage.setItem("news_auth", "true");

			dispatch(logIn());
			navigate("/profile", );
		} else {
			setLogin("");
			setPassword("");

			setError(true);
		}
	}

	return (
		<Container>
			<Form className={"form"}>
				<input
					placeholder={"Username"}
					value={login}
					className={error ? "input_error" : "input"}
					onChange={(event) => {
						setLogin(event.target.value);
						setError(false);
					}}
				/>

				<input
					placeholder={"Password"}
					type={"password"}
					value={password}
					className={error ? "input_error" : "input"}
					onChange={(event) => {
						setPassword(event.target.value);
						setError(false);
					}}
				/>

				<Button onClick={() => handleLogin()}>
					Log in
				</Button>
			</Form>

			{error && <LoginError/>}
		</Container>
	);
}