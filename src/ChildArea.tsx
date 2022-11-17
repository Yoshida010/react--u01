import { FC, memo } from "react";

type Props = {
	open: boolean;
	onClickClose: () => void;
};

export const ChildArea: FC<Props> = memo((props) => {
	const { open, onClickClose } = props;

	console.log("ChalidAreaがレンダリングされた");

	// const data = [...Array(2000).keys()];
	// data.forEach(() => {
	// 	console.log("...");
	// });

	return (
		<>
			{open ? (
				<div style={style}>
					<p>子コンポーネント</p>
					<button onClick={onClickClose}>閉じる</button>
				</div>
			) : null}
		</>
	);
});

const style = {
	width: "100%",
	height: "100px",
	backgroundColor: "khaki",
};
