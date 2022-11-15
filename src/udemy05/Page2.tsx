/** @format */

import { FC } from "react";
import { Link } from "react-router-dom";

export const Page2: FC = () => {
	return (
		<div>
			<h1>Page2</h1>
			{/* パラムス */}
			<Link to="/page2/20">URLParameterのページ</Link>
			<Link to="/page2/200?name=hogehoge">Query parameterのページ</Link>
		</div>
	);
};
