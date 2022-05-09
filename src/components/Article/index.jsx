import React from "react";
import moment from "moment";

import "./index.css";

export default function Article({
	title,
	link,
	published_date,
	source: {
		title: sourseTitle,
		url
	}
}) {
	return (
		<div className={"article"}>
			<div className={"title"}>
				<a href={link} className={"link"}>
					<h3>{title}</h3>
				</a>
			</div>

			<div className={"source"}>
				<a href={url} className={"link"}>
					<div>Source: {sourseTitle}</div>
				</a>
			</div>

			<div className={"date"}>
				{moment(published_date).format("MMMM DD, YYYY")}
			</div>
		</div>
	);
}