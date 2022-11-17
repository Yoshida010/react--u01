/** @format */

import { FC } from "react";
import styled from "styled-components";

export const Card: FC = (props) => {
	const { children } = props;
	return <SCard>{children}</SCard>;
};

const SCard = styled.div`
	background-color: #eee;
	box-shadow: #ddd 0px 0px 4px 2px;
	border-radius: 8px;
	padding: 16px;
`;
