/** @format */

import { FC } from "react";
import styled from "styled-components";

type Props = {
	placeholder: string;
};

export const Input: FC<Props> = (props) => {
	const { placeholder = "" } = props;

	return <SInput type="text" placeholder={placeholder}></SInput>;
};

const SInput = styled.input`
	padding: 8px 16px;
	border: solid #ddd 1px;
	border-radius: 50vw;
	outline: none;
`;
