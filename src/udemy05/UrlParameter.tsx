/** @format */

import { FC } from "react";
import { useParams, useLocation } from "react-router-dom";

export const UrlParameter: FC = () => {
	const { id } = useParams<{ id: string }>();
	// searchに?以降の文字列が入っている
	// URLSearchParamsを使うことで、簡単にクエリを取り出すことができる
	const { search } = useLocation();
	const query = new URLSearchParams(search);

	return (
		<div>
			<h1>URLパラメーター</h1>
			<p>パラメーターは{id}</p>
			<p>クエリパラメーターは{query.get("name")}</p>
		</div>
	);
};
