import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	background-color: #333;
	color: #f2f2f2;
	text-align: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 45px;
	line-height: 45px;
`;

export default () => {
	return (
		<Div>
			<footer>
				Copyright &copy; {new Date().getFullYear()} ImageShare
			</footer>
		</Div>
	);
};
