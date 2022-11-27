/** @format */

import { FC } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

/* FIXME: typeを修正 */
type Props = {
	children: any;
	onClick: () => void;
};

export const SecondaryButton: FC<Props> = (props) => {
	const { children, onClick } = props;
	return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
	background-color: #11999e;
`;
