/** @format */

import { FC } from "react";
import { Link, useHistory } from "react-router-dom";

export const Page1: FC = () => {
	const arr = [...Array(100).keys()];
	console.log(arr);

	const history = useHistory();
	const onClickDetailA = () => history.push("/page1/detailA");

	return (
		<div>
			<h1>Page1</h1>
			<Link to={{ pathname: "/page1/detailA", state: arr }}>Page1DetailA</Link>
			<Link to="/page1/detailB">Page1DetailB</Link>
			<button onClick={onClickDetailA}>DetailA</button>
		</div>
	);
};
