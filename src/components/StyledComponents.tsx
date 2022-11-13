import { FC } from "react";
import styled from "styled-components";

export const StyledComponents: FC = () => {
	return (
		<StyledDiv>
			<StyledText>--Styled Components--</StyledText>
			<StyledButton>ボタン！！</StyledButton>
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	padding: 8px;
	margin-top: 16px;
	text-align: center;
	background-color: #ddd;
`;

const StyledText = styled.p`
	font-size: 8px;
`;

const StyledButton = styled.button`
	border: none;
	color: #fff;
	background-color: #aaa;
`;
