/** @format */

import { FC } from "react";
import styled from "styled-components";

export const Top: FC = () => {
	return (
		<SContainer>
			<h2>トップページです</h2>
		</SContainer>
	);
};

const SContainer = styled.div`
	text-align: center;
`;
