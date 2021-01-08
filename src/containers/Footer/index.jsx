import React from 'react';
import A from '../../components/A';
import './index.css';

const Footer = () => (
	<footer>
		<ul className="list-unstyled">
			<li>
				<A href="https://github.com/jeffwesson/" title="Github">
					<i className="fab fa-github fa-3x"></i>
				</A>
			</li>
			<li>
				<A href="https://twitter.com/jeffwesson" title="Twitter">
					<i className="fab fa-twitter fa-3x"></i>
				</A>
			</li>
			<li>
				<A href="https://medium.com/@jeffwesson" title="Blog">
					<i className="fab fa-medium fa-3x"></i>
				</A>
			</li>
			<li>
				<A href="https://linkedin.com/in/jswesson" title="LinkedIn">
					<i className="fab fa-linkedin fa-3x"></i>
				</A>
			</li>
			<li>
				<A href="mailto:jeffwesson@hey.com" title="Email">
					<i className="fas fa-envelope fa-3x"></i>
				</A>
			</li>
			<li>
				<A href="https://keybase.io/jeffwesson" title="Keybase">
					<i className="fab fa-keybase fa-3x"></i>
				</A>
			</li>
		</ul>
		<p className="text-center">&copy; {new Date().getFullYear()} Jeff Wesson</p>
	</footer>
);

export default Footer;
