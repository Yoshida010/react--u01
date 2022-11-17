/** @format */

import { FC } from "react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout: FC = (props) => {
	const { children } = props;
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
