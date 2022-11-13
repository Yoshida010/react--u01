import { FC } from "react";

export const InlineStyle: FC = () => {
	return (
		<div style={containerStyle}>
			<p>--Inline Style--</p>
			<button>インラインスタイル</button>
		</div>
	);
};

const containerStyle = {
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	border: "1px solid #ddd",
};
