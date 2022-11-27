/** @format */

import { FC } from "react";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./udemy04/CssModules";
import { Emotion } from "./udemy04/Emotion";
import { InlineStyle } from "./udemy04/InlineStyle";
import { StyledComponents } from "./udemy04/StyledComponents";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Router } from "./router/Router";
import { PrimaryButton } from "./udemy06/atoms/button/PrimaryButton";
import { SecondaryButton } from "./udemy06/atoms/button/SecondaryButton";
import { SearchInput } from "./udemy06/molecules/SearchInput";
import { UserCard } from "./udemy06/organisms/user/UserCard";
import { HeaderOnly } from "./udemy06/templates/HeaderOnly";
import { DefaultLayout } from "./udemy06/templates/DefaultLayout";
import { UserProvider } from "./udemy06/providers/UserProvider";

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
			<UserProvider>
				{/* -------- udemy04 -------- */}
				{/* <div>
          <input value={text} onChange={onChangeText} />
          <br />
          <br />
          <button onClick={onClickOpen}>表示</button>
          <ChildArea open={open} onClickClose={onClickClose} />
          <InlineStyle />
          <CssModules />
          <StyledComponents />
          <Emotion />
        </div> */}

				{/* -------- udemy05 --------  */}
				{/* <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
          </div>
          <Router />
        </BrowserRouter> */}

				{/* -------- udemy06 -------- */}
				<Router />
			</UserProvider>
		</>
	);
};
