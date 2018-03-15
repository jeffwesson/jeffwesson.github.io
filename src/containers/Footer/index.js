import React from 'react';
import A from '../../components/A';
import './index.css';

const Footer = () => (
	<footer>
		<ul className="list-unstyled list-inline text-center">
			<li>
				<A href="https://github.com/jeffwesson/">
					<span>GitHub</span>
				</A>
			</li>
			<li>
				<A href="https://twitter.com/jeffwesson">
					<span>Twitter</span>
				</A>
			</li>
			<li>
				<A href="https://medium.com/@jeffwesson">
					<span>Medium</span>
				</A>
			</li>
			<li>
				<A href="https://linkedin.com/in/jswesson">
					<span>LinkedIn</span>
				</A>
			</li>
			<li>
				<A href="mailto:jeff@jeffwesson.com">
					<span>Email</span>
				</A>
			</li>
		</ul>
		<p className="text-center">&copy; {new Date().getFullYear()} Jeff Wesson</p>
	</footer>
);

export default Footer;
