/** @format */

import { FC } from "react";
import { useParams } from "react-router-dom";

export const UrlParameter: FC = () => {
	const { id } = useParams<{ id: string }>();
	return (
		<div>
			<h1>URLパラメーター</h1>
			<p>パラメーターは{id}</p>
		</div>
	);
};
