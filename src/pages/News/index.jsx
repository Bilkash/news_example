import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import axios from "axios";
import Article from "../../components/Article";

import "./index.css";

export default function News() {
	const [list, setList] = useState([]);

	const fetchData = async () => {
		const response = await axios.get("https://newsapi.org/v2/everything", {
			params: {
				sortBy: "popularity",
				q: "Ukraine",
				apiKey: "07e074fe4bb6498db01f6b345a2491a4"
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
						<Article key={it.publishedAt} {...it}/>
					);
				})}
			</div>
		</Container>
	);
}