/** @format */

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../udemy05/Home";
import { Page2 } from "../udemy05/Page2";
import { Page404 } from "../udemy05/Page404";
import { Top } from "../udemy06/pages/Top";
import { Users } from "../udemy06/pages/Users";
import { DefaultLayout } from "../udemy06/templates/DefaultLayout";
import { HeaderOnly } from "../udemy06/templates/HeaderOnly";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					{/* <Home /> */}
					<DefaultLayout>
						<Top />
					</DefaultLayout>
				</Route>
				<Route
					path="/page1"
					render={({ match: { url } }) => (
						<Switch>
							{page1Routes.map((route) => (
								<Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
									{route.children}
								</Route>
							))}
						</Switch>
					)}
				/>
				<Route
					path="/page2"
					render={({ match: { url } }) => (
						<Switch>
							{page2Routes.map((route) => (
								<Route key={route.path} path={`${url}${route.path}`} exact={route.exact}>
									{route.children}
								</Route>
							))}
						</Switch>
					)}
				/>
				<Route path="/users">
					<HeaderOnly>
						<Users />
					</HeaderOnly>
				</Route>
				<Route path="*">
					<Page404 />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
