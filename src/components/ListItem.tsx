import { FC } from "react";
import type { User } from "../type/user";

export const ListItem: FC<User> = (props) => {
	const { id, name, age } = props;

	return (
		<p>
			{id} : {name} ( {age} )
		</p>
	);
};
