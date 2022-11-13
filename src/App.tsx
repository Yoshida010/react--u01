import { FC } from "react";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";

export const App: FC = () => {
	console.log("Appがレンダリングされた");

	const [text, setText] = useState("");
	const [open, setOpen] = useState(false);

	const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const onClickOpen = () => {
		setOpen(!open);
	};

	const onClickClose = useCallback(() => {
		setOpen(false);
	}, []);

	return (
		<div>
			<input value={text} onChange={onChangeText} />
			<br />
			<br />
			<button onClick={onClickOpen}>表示</button>
			<ChildArea open={open} onClickClose={onClickClose} />
			<InlineStyle />
		</div>
	);
};
