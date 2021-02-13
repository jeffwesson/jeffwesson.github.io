import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Header = () => (
	<header className="text-center">
		<hgroup>
			<h1>Jeff Wesson</h1>
			<h2>Senior Software Engineer</h2>
		</hgroup>
		<nav>
			<ul className="nav nav-justified">
				<li>
					<NavLink
						to="/"
						className="nav-link"
						isActive={(match, location) => !/\/portfolio/i.test(location.pathname)}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/portfolio"
						className="nav-link"
						exact={true}
						strict
						isActive={(match, location) => /\/portfolio/i.test(location.pathname)}
					>
						Portfolio
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
