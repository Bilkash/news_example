import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import axios from "axios";
import Article from "../../components/Article";

import "./index.css";

export default function News() {
	const [list, setList] = useState([]);

	const fetchData = async () => {
		const response = await axios.get("https://google-news1.p.rapidapi.com/top-headlines",
			{
				params: {country: "US", lang: "en", limit: "50"},
				headers: {
					"X-RapidAPI-Host": "google-news1.p.rapidapi.com",
					"X-RapidAPI-Key": "1dd1404054msh27880aa8c28e432p1596c4jsncb87c8f6579e"
				}
			}).then(res => res);

		setList(response.data.articles);
	};

	useEffect( () => {
		fetchData();
	}, []);

	return (
		<Container>
			<h1>NEWS</h1>

			<div className={"list"}>
				{list.map((it) => {
					return (
						<Article key={it.published_date} {...it}/>
					);
				})}
			</div>
		</Container>
	);
}