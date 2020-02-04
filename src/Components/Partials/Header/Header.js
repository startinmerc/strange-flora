import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavSectionContainer from '../../Nav/NavSectionContainer';
import HeaderButton from './HeaderButton';

// Returns sticky header element containing header buttons & nav section

class Header extends Component {
	render(){
		return(
			<header id="header">
				<div className="header-main">
					<h2 className="header-title">
						<Link to="/">
							Strange Flora
						</Link>
					</h2>
					<div className="header-carts">
						<HeaderButton type={0} />
						<HeaderButton type={1} />
					</div>
				</div>
				<NavSectionContainer />
			</header>
		);
	};
};

export default Header;
