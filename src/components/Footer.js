import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	background-color: #333;
	max-height: 45px;
	color: #f2f2f2;
	text-align: center;
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
