import React, {useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import Article from "../../components/Article";

import "./index.css";

export default function News() {
	const [list, setList] = useState([]);
	const [search, setSearch] = useState("");

	const fetchData = async (query) => {
		const response = await axios.get("https://newsapi.org/v2/everything", {
			params: {
				sortBy: "popularity",
				q: query ?? "Ukraine",
				apiKey: "07e074fe4bb6498db01f6b345a2491a4"
			}
		}).then(res => res);

		setList(response.data.articles);
	};

	function handleSearch() {
		fetchData(search);
	}

	useEffect( () => {
		fetchData();
	}, []);

	useEffect(() => {
		if (!search) {
			fetchData();
		}
	}, [search]);

	return (
		<Container>
			<h1>NEWS</h1>

			<div className={"search"}>
				<input
					placeholder={"Search news"}
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>

				<Button onClick={() => handleSearch()}>
					Search
				</Button>
			</div>

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