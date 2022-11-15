/** @format */

import { FC } from "react";
import { Link } from "react-router-dom";

export const Page404: FC = () => {
	return (
		<div>
			<h1>ページが見つかりません</h1>
			<Link to="/">トップに戻る</Link>
		</div>
	);
};
