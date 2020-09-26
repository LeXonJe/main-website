import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './style.scss';

class RecommendedSection extends Component {
	replaceLogo(element) {
		element.outerHTML = `<p class="logo logo-text">${this.props.featured.title}</p>`;
	}

	render() {
		//Creating info text
		let date = new Date(this.props.featured.date.created);

		let info, len;
		switch (this.props.featured.type) {
			case 'series':
				info = `Serie - ${date.getFullYear()} - ${(len = this.props.featured.seasons.length)} Staffel ${len !== 1 ? 'n' : ''}`;
				break;
			case 'movies':
			default:
				info = `Film - ${date.getFullYear()}`;
		}

		return (
			<div className="recommended-container">
				<img className={'logo'} src={this.props.featured.logo} alt={'Element Logo'} onError={(e) => this.replaceLogo(e.target)} />
				<div className={'info'}>{info}</div>
				<ul className={'tag-list'}>
					{this.props.featured.tags.map((tag) => (
						<li key={uuid()} className={'tag-list-item'}>
							<Link to={`/search/${tag}`}>{tag}</Link>
						</li>
					))}
				</ul>
				<div className={'description'}>{this.props.featured.description}</div>
				<div className={'controls'}>
					<Link to={`/watch/${this.props.featured.key}`}>Jetzt anschauen</Link>
				</div>
			</div>
		);
	}
}

export default RecommendedSection;
