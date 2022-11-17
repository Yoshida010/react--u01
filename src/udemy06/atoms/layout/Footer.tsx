/** @format */

import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer: FC = () => {
	return <SFooter>&copy; 2021 text Inc.</SFooter>;
};

const SFooter = styled.footer`
	background-color: #11999e;
	color: #fff;
	text-align: center;
	padding: 8px 0;
	position: fixed;
	bottom: 0;
	width: 100%;
`;
