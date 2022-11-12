import { FC } from "react";

type Props = {
	open: boolean;
};

export const ChildArea: FC<Props> = (props) => {
	const { open } = props;

	return (
		<>
			{open ? (
				<div style={style}>
					<p>子コンポーネント</p>
				</div>
			) : null}
		</>
	);
};

const style = {
	width: "100%",
	height: "100px",
	backgroundColor: "khaki",
};
