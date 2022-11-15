/** @format */

import { FC } from "react";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./udemy04/CssModules";
import { Emotion } from "./udemy04/Emotion";
import { InlineStyle } from "./udemy04/InlineStyle";
import { StyledComponents } from "./udemy04/StyledComponents";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

export const App: FC = () => {
	console.log("Appがレンダリングされた");

	/* -------- udemy04 -------- */
	// const [text, setText] = useState("");
	// const [open, setOpen] = useState(false);

	// const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setText(e.target.value);
	// };

	// const onClickOpen = () => {
	// 	setOpen(!open);
	// };

	// const onClickClose = useCallback(() => {
	// 	setOpen(false);
	// }, []);
	/* ------------------------- */

	return (
		<>
			{/* -------- udemy04 -------- */}
			<div>
				{/* <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
        <InlineStyle />
        <CssModules />
        <StyledComponents />
        <Emotion /> */}
			</div>

			{/* -------- udemy05 --------  */}
			<BrowserRouter>
				<div>
					<Link to="/">Home</Link>
					<Link to="/page1">Page1</Link>
					<Link to="/page2">Page2</Link>
				</div>
				<Router />
			</BrowserRouter>
		</>
	);
};
