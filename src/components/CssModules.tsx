import { FC } from "react";
import classes from "./CssModules.module.scss";

export const CssModules: FC = () => {
	return (
		<div className={classes.container}>
			<p>--CSS Modules--</p>
			<button className={classes.btn}>ボタン</button>
		</div>
	);
};
