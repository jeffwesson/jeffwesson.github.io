import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Header = () => (
	<header className="text-center">
		<hgroup>
			<h1>Jeff Wesson</h1>
			<h2>Software Engineer</h2>
		</hgroup>
		<nav>
			<ul className="nav nav-justified">
				<li>
					<NavLink
						to="/"
						isActive={(match, location) => !/\/portfolio/i.test(location.pathname)}
						className="nav-link">
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						strict
						to="/portfolio"
						isActive={(match, location) => /\/portfolio/i.test(location.pathname)}
						className="nav-link">
						Portfolio
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
