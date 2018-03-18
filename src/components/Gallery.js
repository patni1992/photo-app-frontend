import React, { Component } from 'react';
import dummyData from '../dummyData';
import Photo from './Photo';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import Modal from './Modal';

const Styling = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1000px;
	margin: 0 auto;
`;

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: {
				src: null,
				description: null
			},
			images: [
				{
					id: '0',
					description: 'beautiful landscape',
					tags: [ 'Valley', 'Summer', 'Paradise', 'Sun' ],
					imageLink:
						'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg' +
						'3919321_1443393332_n.jpg'
				},
				{
					id: '1',
					description: 'Aliens???',
					tags: [ 'Night', 'Summer' ],
					imageLink:
						'https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=' +
						'08323785_735653395_n.jpg'
				},
				{
					id: '2',
					description: 'On a vacation!',
					tags: [ 'Sea', 'Summer', 'Swim', 'Holiday' ],
					imageLink:
						'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg'
				}
			],
			filterOn: ''
		};
	}

	setFilterValue = (value) => {
		this.setState({ filterOn: value });
	};

	setModal = (value) => {
		if (value) {
			this.setState({ modal: value });
		} else {
			this.setState({
				modal: {
					src: false,
					description: false
				}
			});
		}
	};

	render() {
		return (
			<div>
				<Searchbar onChangeHandler={this.setFilterValue} />

				{this.state.modal.src ? (
					<Modal
						closeHandler={this.setModal}
						description={this.state.modal.description}
						src={this.state.modal.src}
					/>
				) : null}
				<Styling>
					{this.state.images
						.filter((data) => {
							return data.description.toLowerCase().indexOf(this.state.filterOn.toLowerCase()) !== -1;
						})
						.map((data) => (
							<Photo
								clickHandler={this.setModal}
								description={data.description}
								tags={data.tags}
								src={data.imageLink}
							/>
						))}
				</Styling>
			</div>
		);
	}
}

export default Gallery;
