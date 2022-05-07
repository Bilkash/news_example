import React from "react";

import "./index.css";
import moment from "moment";

export default function Article({
	title,
	author,
	urlToImage,
	source: {name},
	publishedAt,
	content,
	url
}) {
	return (
		<div className={"article"}>
			<div className={"article_head"}>
				<img className={"img"} src={urlToImage}/>

				<div>
					<a className={"link"} href={url}>
						<h3>{title}</h3>
					</a>

					<div>Author: {author}</div>

					<a href={url}>
						<div>Source:  {name}</div>
					</a>

					<div>{moment(publishedAt).format("MMMM DD, YYYY")}</div>
				</div>
			</div>

			<div>{content}</div>
		</div>
	);
}