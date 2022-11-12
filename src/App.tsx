import { FC, useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./type/user";

export const App: FC = () => {
	const [users, setUsers] = useState<User[]>([]);

	//画面表示時にユーザー情報取得
	useEffect(() => {
		axios.get<User[]>("https://example.com/users").then((res) => {
			setUsers(res.data);
		});
	});

	return (
		<div>
			<h1>今日は</h1>
			{users.map((user) => (
				<ListItem id={user.id} name={user.name} age={user.age} />
			))}
		</div>
	);
};
