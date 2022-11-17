/** @format */

import { Page2 } from "../udemy05/Page2";
import { UrlParameter } from "../udemy05/UrlParameter";

export const page2Routes = [
	{
		path: "/",
		exact: true,
		children: <Page2 />,
	},
	{
		path: "/:id",
		exact: false,
		children: <UrlParameter />,
	},
];
