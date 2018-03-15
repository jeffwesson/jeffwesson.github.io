import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faMediumM from '@fortawesome/fontawesome-free-brands/faMediumM'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import A from '../../components/A';
import './index.css';

const Footer = () => (
	<footer>
		<ul className="list-unstyled">
			<li>
				<A href="https://github.com/jeffwesson/" blank title="Github">
					<FontAwesomeIcon icon={faGithub} size="3x" />
				</A>
			</li>
			<li>
				<A href="https://twitter.com/jeffwesson" blank title="Twitter">
					<FontAwesomeIcon icon={faTwitter} size="3x" />
				</A>
			</li>
			<li>
				<A href="https://medium.com/@jeffwesson" blank title="Medium">
					<FontAwesomeIcon icon={faMediumM} size="3x" />
				</A>
			</li>
			<li>
				<A href="https://linkedin.com/in/jswesson" blank title="LinkedIn">
					<FontAwesomeIcon icon={faLinkedin} size="3x" />
				</A>
			</li>
			<li>
				<A href="mailto:jeff@jeffwesson.com" title="Email">
					<FontAwesomeIcon icon={faEnvelope} size="3x" />
				</A>
			</li>
		</ul>
		<p className="text-center">&copy; {new Date().getFullYear()} Jeff Wesson</p>
	</footer>
);

export default Footer;
