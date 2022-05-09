import React from "react";
import moment from "moment";

import "./index.css";

export default function Article({
	author,
	clean_url,
	link,
	media,
	summary,
	title,
	published_date,
}) {
	return (
		<div className={"article"}>
			<div className={"article_head"}>
				<img src={media} className={"pic"}/>

				<div className={"article_info"}>
					<div className={"title"}>
						<a href={link} className={"link"}>
							<h3>{title}</h3>
						</a>
					</div>

					<div className={"source"}>
						<a href={clean_url} className={"link"}>
							<div>Source: {clean_url}</div>
						</a>
					</div>

					<div className={"date"}>
						{moment(published_date).format("MMMM DD, YYYY")}
					</div>
				</div>
			</div>

			<div>
				{summary}
			</div>

			<div>
				Author {author ?? ""}
			</div>
		</div>
	);
}