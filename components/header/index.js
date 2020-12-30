import Link from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Header() {
	return (
		<header className="text-center">
			<hgroup>
				<h1>Jeff Wesson</h1>
				<h2>Software Engineer</h2>
			</hgroup>
			<nav>
				<ul className="nav nav-justified">
					<li>
						<Link href="/" className="nav-link active">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/portfolio" className="nav-link">
							<a>Portfolio</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
