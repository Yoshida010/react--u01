import { FC } from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion: FC = () => {
	// styled jsxの書き方
	// scssの書き方がそのまま可能
	const styles = {
		containerStyle: css`
			background-color: #aaa;
		`,
	};

	// インラインスタイルの書き方
	const titleStyle = css({
		margin: 0,
	});

	return (
		<div css={styles.containerStyle}>
			<p css={titleStyle}>--Emotion--</p>
			<SButton>button</SButton>
		</div>
	);
};

const SButton = styled.button`
	padding: 8px;
	background-color: #ddd;
	border: none;
	transition: 0.3s;
	&:hover {
		background-color: #fff;
	}
`;
