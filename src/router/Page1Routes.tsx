/** @format */

import { Page1 } from "../udemy05/Page1";
import { Page1DetailA } from "../udemy05/Page1DetailA";
import { Page1DetailB } from "../udemy05/Page1DetailB";

export const page1Routes = [
	{
		path: "/",
		exact: true,
		children: <Page1 />,
	},
	{
		path: "/detailA",
		exact: false,
		children: <Page1DetailA />,
	},
	{
		path: "/detailB",
		exact: false,
		children: <Page1DetailB />,
	},
];
