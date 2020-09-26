import React from 'react';
import './style.scss';
import Loading from '../../components/Loading';
import RecommendedSection from '../../components/RecommendedSection';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Backend from '../../classes/Backend';
import HomeElementList from '../../components/HomeElementList';

class Home extends React.Component {
	state = {
		list: [],
		featured: {},
	};

	constructor(props) {
		super(props);

		Backend.getList('media', 5).then((data) => {
			this.setState({ list: data.response, featured: data.response[3] });
			props.setBackground && props.setBackground(this.state.list[3].thumbnail);
		});
	}

	render() {
		if (!this.state.list.length) {
			return <Loading />;
		}

		return (
			<div id="home-container">
				<RecommendedSection featured={this.state.featured} />
				<div id="content">
					<HomeElementList list={this.state.list} title="Klassiker" />
				</div>
			</div>
		);
	}
}

export default Home;
