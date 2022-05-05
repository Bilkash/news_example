import React from "react";
import { Routes ,Route } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

export default function App() {
	return (
		<Layout>
			<Routes>
				<Route exact path='/' element={<Main/>}/>
				<Route exact path='/news' element={<News/>}/>
				<Route exact path='/login' element={<Login/>}/>
				<Route exact path='/profile' element={<Profile/>}/>
			</Routes>
		</Layout>

	);
}