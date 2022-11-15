/** @format */

import { FC } from "react";
import { Link } from "react-router-dom";

export const Page1: FC = () => {
	return (
		<div>
			<h1>Page1</h1>
			<Link to="/page1/detailA">Page1DetailA</Link>
			<Link to="/page1/detailB">Page1DetailB</Link>
		</div>
	);
};
