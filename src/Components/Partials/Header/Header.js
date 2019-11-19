import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavSectionContainer from '../../Nav/NavSectionContainer';
import HeaderButton from './HeaderButton';

class Header extends Component {
	render(){
		return(
			<header id="header">
				<div className="header-main">
					<Link to="/" style={{textDecoration: 'none'}}>
						<h2 className="header-title">Strange Fauna</h2>
					</Link>
					<div className="header-carts">
						<HeaderButton type="wish" content={this.props.wish}/>
						<HeaderButton type="cart" content={this.props.cart}/>
					</div>
				</div>
				<NavSectionContainer />
			</header>
		);
	}
}

export default Header;
