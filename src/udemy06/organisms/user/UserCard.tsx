/** @format */

import { FC } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

type Props = {
	name: string;
	image: string;
	email: string;
	phone: string;
	company: {
		name: string;
	};
	website: string;
};

/* FIXME: typeの指定方法を知る */
export const UserCard: FC<any> = (props) => {
	const { user } = props;

	return (
		<Card>
			{/* unsplashにおいて、"source."を追加、"photos"を削除すると写真が利用できる */}
			<UserIconWithName image={user.image} name={user.name} />
			<SDl>
				<dt>メール</dt>
				<dd>{user.email}</dd>
				<dt>TEL</dt>
				<dd>{user.phone}</dd>
				<dt>会社名</dt>
				<dd>{user.company.name}</dd>
				<dt>WEB</dt>
				<dd>{user.website}</dd>
			</SDl>
		</Card>
	);
};

const SDl = styled.dl`
	text-align: left;
	margin-bottom: 0;
	dt {
		float: left;
	}
	dd {
		padding-left: 32px;
		padding-bottom: 8px;
		overflow-wrap: break-word;
	}
`;
