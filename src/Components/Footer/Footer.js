import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import {
	FacebookSquare,
	TwitterSquare,
	InstagramSquare,
	YoutubeSquare,
} from "../SVGs/Socials";
import "./Footer.css";

// Returns footer element with site links & link to Strange Industries

function Footer({ emailRef }) {
	return (
		<footer className="footer">
			<div className="footer__column">
				<Signup emailRef={emailRef} />
				<div className="footer__socials">
					<a href="http://www.facebook.com" aria-label="Link to Facebook">
						<FacebookSquare size={40} />
					</a>
					<a href="http://www.twitter.com" aria-label="Link to Twitter">
						<TwitterSquare size={40} />
					</a>
					<a href="http://www.instagram.com" aria-label="Link to Instagram">
						<InstagramSquare size={40} />
					</a>
					<a href="http://www.youtube.com" aria-label="Link to Youtube">
						<YoutubeSquare size={40} />
					</a>
				</div>
			</div>
			<div className="footer__column">
				<ul
					className="footer__link-group text--right"
					style={{ paddingRight: "5%" }}
				>
					<li className="footer__link">
						<h3>
							<Link to="/products/all">Our Products</Link>
						</h3>
					</li>
					<li className="footer__link-sub">
						<Link to="/products/mushrooms">Mushrooms</Link>
					</li>
					<li className="footer__link-sub">
						<Link to="/products/berries">Berries</Link>
					</li>
					<li className="footer__link-sub">
						<Link to="/products/flowers">Flowers</Link>
					</li>
					<li className="footer__link-sub">
						<Link to="/products/reductions">Reductions</Link>
					</li>
				</ul>
				<ul className="footer__link-group" style={{ paddingLeft: "5%" }}>
					<li className="footer__link">
						<h3>
							<Link to="/about">About Us</Link>
						</h3>
					</li>
					<li className="footer__link-sub">
						<Link to="/about/faq">FAQ</Link>
					</li>
					<li className="footer__link-sub">
						<Link to="/about/delivery">Delivery</Link>
					</li>
					<li className="footer__link-sub">
						<Link to="/about/returns">Returns</Link>
					</li>
					<li className="footer__link-sub">
						<Link to="/about/disclaimer">Disclaimer</Link>
					</li>
				</ul>
			</div>
			<p className="footer__external">
				A{" "}
				<a
					className="footer__link"
					rel="noopener noreferrer"
					target="_blank"
					href="https://www.strangeindustries.co.uk"
				>
					Strange Industries
				</a>{" "}
				Site.
			</p>
		</footer>
	);
}

Footer.propTypes = {
	emailRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
	]),
};

export default Footer;
