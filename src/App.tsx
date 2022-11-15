/** @format */

import { FC } from "react";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./udemy04/CssModules";
import { Emotion } from "./udemy04/Emotion";
import { InlineStyle } from "./udemy04/InlineStyle";
import { StyledComponents } from "./udemy04/StyledComponents";
import { Home } from "./udemy05/Home";
import { Page1 } from "./udemy05/Page1";
import { Page2 } from "./udemy05/Page2";
import { Page1DetailA } from "./udemy05/Page1DetailA";
import { Page1DetailB } from "./udemy05/Page1DetailB";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

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
					<Link to="/page1/detailA">Page1DetailA</Link>
					<Link to="/page1/detailB">Page1DetailB</Link>
				</div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route
						path="/page1"
						render={({ match: { url } }) => (
							<Switch>
								<Route exact path={url}>
									<Page1 />
								</Route>
								<Route path={`${url}/detailA`}>
									<Page1DetailA />
								</Route>
								<Route path={`${url}/detailB`}>
									<Page1DetailB />
								</Route>
							</Switch>
						)}
					/>
					<Route path="/page2">
						<Page2 />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
};
