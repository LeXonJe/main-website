import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class HomeElementList extends Component {
	state = {};

	replaceLogo(element, item) {
		element.outerHTML = `<p class="item-logo item-logo-text">${item.title}</p>`;
	}

	render() {
		if (!this.props.list) return;

		return (
			<div id="home-list-container">
				<p id="home-list-title">{this.props.title}</p>
				<div className="home-list">
					{this.props.list.map((item) => {
						//Creating info text
						let date = new Date(item.date.created);

						let info;
						switch (item.type) {
							case 'series':
								info = `Serie - ${date.getFullYear()}`;
								break;
							case 'movies':
							default:
								info = `Film - ${date.getFullYear()}`;
						}

						return (
							<Link className={'list-item'} to={`/watch/${item.key}`}>
								<img className="item-thumbnail" alt="Thumbnail" src={item.thumbnail} />
								<div className="item-control">
									<img className="item-logo" alt="Logo" src={item.logo} onError={(e) => this.replaceLogo(e.target, item)} />
									<p className="item-info">{info}</p>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}
}

export default HomeElementList;
