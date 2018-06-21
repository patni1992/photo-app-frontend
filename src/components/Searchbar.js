import React, { Component } from 'react';

import styled from 'styled-components';

const Input = styled.input`
	padding: 20px;
	width: 100%;
	border: 2px #d3d3d3 solid;
`;

const InputContainer = styled.div`
	max-width: 400px;
	margin: 20px auto;
`;

class Searchbar extends Component {
	render() {
		return (
			<InputContainer>
				<Input
					placeholder="Search for images"
					type="text"
					onChange={e => {
						this.props.onChangeHandler(e.target.value);
					}}
				/>
			</InputContainer>
		);
	}
}

export default Searchbar;
