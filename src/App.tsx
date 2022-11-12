import { FC } from "react";
import { useState } from "react";
import { ChildArea } from "./ChildArea";

export const App: FC = () => {
	const [text, setText] = useState("");
	const [open, setOpen] = useState(false);

	const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const onClickOpen = () => {
		setOpen(!open);
	};

	return (
		<div>
			<input value={text} onChange={onChangeText} />
			<br />
			<br />
			<button onClick={onClickOpen}>表示</button>
			<ChildArea open={open} />
		</div>
	);
};
