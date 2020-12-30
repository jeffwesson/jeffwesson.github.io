import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import projects from '../../lib/data/projects';

export default function Portfolio() {
	return (
		<>
			<Head>
				<title>Jeff Wesson</title>
				<link rel="icon" href="/favicon.ico" />
				<script defer src="fa-icons.min.js"></script>
			</Head>
			<header className="text-center">
				<hgroup>
					<h1>Jeff Wesson</h1>
					<h2>Software Engineer</h2>
				</hgroup>
				<nav>
					<ul className="nav nav-justified">
						<li>
							<Link href="/" className="nav-link">
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href="/portfolio" className="nav-link active">
								<a>Portfolio</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			{projects && projects.length && (
				<main>
					<ul className="list-unstyled">
						{projects.map((project, i) => (
							<li key={i} className="portfolio-item">
								{/* {
								project.inDevelopment ? <div className="pull-right in-development"><span></span> Currently in development</div> : ''
							} */}
								<dl>
									<dt className={styles.dt}>{project.title}</dt>
									<dd className={styles.dd}>{project.description}</dd>
									<dt className={styles.dt}>Tools Used</dt>
									<dd className={`${styles.dd} tools-used`}>{project.toolsUsed.join(', ')}</dd>
								</dl>
								<span>
									<a href={project.address} target="_blank" rel="noopener noreferrer">
										{project.address}
									</a>
								</span>
								{project.image && (
									<img
										src={project.image}
										alt={`Example of work for ${project.title}`}
										className="img-responsive"
									/>
								)}
							</li>
						))}
					</ul>
				</main>
			)}
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
		</>
	);
}
