import React from "react";
import { validateEmail } from "../../middleware";
import PropTypes from "prop-types";
import "./Signup.css";

export default function Signup({ emailRef }) {
	function handleSubmit(e) {
		e.preventDefault();
		if (validateEmail(e.target.email.value)) {
			e.target.children[2].disabled = "disabled";
			e.target.children[3].disabled = "disabled";
			e.target.children[3].innerText = "Signed Up!";
			e.target.classList.add("signup--disabled");
		}
	}

	return (
		<form className="signup" onSubmit={handleSubmit}>
			<label className="signup__label" htmlFor="email">
				Sign up to get our latest products, top deals and inspiring stories
				straight to your inbox. Plus, get £5 off your first order over £50 –
				please allow 24hrs to receive your code.
			</label>
			<br />
			<input className="signup__input" id="email" type="email" ref={emailRef} />
			<button className="signup__submit" type="submit">
				Sign Up!
			</button>
		</form>
	);
}

Signup.propTypes = {
	emailRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
	]),
};
