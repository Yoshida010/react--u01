/** @format */

import { FC } from "react";
import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA: FC = () => {
	const { state } = useLocation();
	console.log(state);

	// ブラウザバックと同じことができる！
	const history = useHistory();
	const onClickBack = () => history.goBack();

	return (
		<div>
			<h1>Page1DetailA</h1>
			<button onClick={onClickBack}>戻る</button>
		</div>
	);
};
