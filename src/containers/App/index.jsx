import React,  { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import About from '../About';
import Portfolio from '../Portfolio';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<header>
					<hgroup>
						<h1>Jeff Wesson</h1>
						<h2>Web Developer</h2>
					</hgroup>
					<nav>
						<Link to="/">About</Link>
						<Link to="/portfolio">Portfolio</Link>
					</nav>
				</header>
				<main>
					<Route exact path="/" component={About} />
					<Route exact path="/portfolio" component={Portfolio} />
				</main>
				<footer>
					<ul>
						<li>
							<a href="https://github.com/jeffwesson/" target="_blank" rel="noopener noreferrer">
								<span>GitHub</span>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/jeffwesson" target="_blank" rel="noopener noreferrer">
								<span>Twitter</span>
							</a>
						</li>
						<li>
							<a href="https://medium.com/@jeffwesson" target="_blank" rel="noopener noreferrer">
								<span>Medium</span>
							</a>
						</li>
						<li>
							<a href="https://linkedin.com/in/jswesson" target="_blank" rel="noopener noreferrer">
								<span>LinkedIn</span>
							</a>
						</li>
						<li>
							<a href="mailto:jeff@jeffwesson.com" target="_blank" rel="noopener noreferrer">
								<span>Email</span>
							</a>
						</li>
					</ul>
					<p>&copy; {new Date().getFullYear()} Jeff Wesson</p>
				</footer>
			</div>
		);
	}
}

export default App;
