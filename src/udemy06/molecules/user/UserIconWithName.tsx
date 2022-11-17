/** @format */

import { FC } from "react";
import styled from "styled-components";

type Props = {
	name: string;
	image: string;
};

export const UserIconWithName: FC<Props> = (props) => {
	const { image, name } = props;
	return (
		<SContainer>
			<SImg height={160} width={160} src={image} alt="プロフィール" />
			<p>{name}</p>
		</SContainer>
	);
};

const SContainer = styled.div`
	text-align: center;
`;

const SImg = styled.img`
	border-radius: 50%;
`;

const SName = styled.p`
	font-size: 18px;
	font-weight: bold;
	margin: 0;
	color: #40514e;
`;
