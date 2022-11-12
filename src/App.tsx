import { FC } from "react";
import { useState } from "react";

export const App: FC = () => {
	const [count, setCount] = useState(0);

	const onClickCountUp = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>カウントアップ</h1>
			<p>{count}</p>
			<button onClick={onClickCountUp}>count</button>
		</div>
	);
};
