/** @format */

import { FC } from "react";
import styled from "styled-components";
import { BaseButton } from "./button/BaseButton";

export const SecondaryButton: FC = (props) => {
	const { children } = props;
	return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
	background-color: #11999e;
`;
