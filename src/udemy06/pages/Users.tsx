/** @format */

import { FC, useContext } from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
	return {
		id: val,
		name: `kaku${val}`,
		image: "https://source.unsplash.com/_HnJfS6WhA8",
		email: "122345@.com",
		phone: "000-2222-2222",
		company: {
			name: "company",
		},
		website: "https://google.com",
	};
});

export const Users: FC = () => {
	const { state } = useLocation();
	const { setUserInfo } = useContext(UserContext);

	return (
		<SContainer>
			<h2>ユーザー一覧です</h2>
			<SearchInput />
			<SUserArea>
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</SUserArea>
		</SContainer>
	);
};

const SContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px;
`;

const SUserArea = styled.div`
	padding-top: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 20px;
`;
