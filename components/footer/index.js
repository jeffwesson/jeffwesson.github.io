import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
	return (
		<footer>
			<ul className={styles.unstyledList}>
				<li>
					<a href="https://github.com/jeffwesson/" blank title="Github">
						<i className="fab fa-github fa-3x"></i>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/jeffwesson" blank title="Twitter">
						<i className="fab fa-twitter fa-3x"></i>
					</a>
				</li>
				<li>
					<a href="https://jeffwesson.github.io/blog/" blank title="Blog">
						<i className="fas fa-blog fa-3x"></i>
					</a>
				</li>
				<li>
					<a href="https://linkedin.com/in/jswesson" blank title="LinkedIn">
						<i className="fab fa-linkedin fa-3x"></i>
					</a>
				</li>
				<li>
					<a href="mailto:jeff@jeffwesson.com" title="Email">
						<i className="far fa-envelope fa-3x"></i>
					</a>
				</li>
				<li>
					<a href="https://keybase.io/jeffwesson" blank title="Keybase">
						<i className="fab fa-keybase fa-3x"></i>
					</a>
				</li>
			</ul>
			<p className="text-center">&copy; {new Date().getFullYear()} Jeff Wesson</p>
		</footer>
	);
}
