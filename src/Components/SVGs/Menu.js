import React from "react";

const Menu = ({size=48, color="#000000"}) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
	 viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" role="img"
	 strokeLinecap="butt" strokeLinejoin="arcs" className="icon menu-icon">
		<line x1="3" y1="12" x2="21" y2="12"></line>
		<line x1="3" y1="6" x2="21" y2="6"></line>
		<line x1="3" y1="18" x2="21" y2="18"></line>
	</svg>
);

export default Menu;
