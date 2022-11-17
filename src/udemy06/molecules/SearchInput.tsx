/** @format */

import { FC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/inpurt/Input";
import styled from "styled-components";

export const SearchInput: FC = () => {
	return (
		<SContainer>
			<Input placeholder="検索条件を入力"></Input>
			<SButtonWrapper>
				<PrimaryButton>検索</PrimaryButton>
			</SButtonWrapper>
		</SContainer>
	);
};

const SContainer = styled.div`
	display: flex;
	align-items: center;
`;

const SButtonWrapper = styled.div`
	padding-left: 8px;
`;
