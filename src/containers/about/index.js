import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const About = () => (
	<section>
		<h3>Hello, I'm Jeff</h3>
		<p>
			I've been building websites for nearly two decades using a variety of development tools; from static HTML &amp; CSS sites, to rich Content Management Systems using the LAMP stack, and now Single Page Applications using the MEAN stack. The Web has already proven to be a very powerful tool. And now, with the the number of mobile devices running modern browsers continuing to increase and an Internet of Things on the horizon, the Web looks poised to gain an even larger market share of data.
		</p>
		<p>
			I am also a cultural anthropologist capable of teasing out valuable information as to how users use the Web. Putting such information to use throughout the entire development process enables me to better understand what users expect and why.
		</p>
		<p>
			You can find any blatherings on code or the occasional baseball tweet at <a href="https://medium.com/@jeffwesson" target="_blank" rel="noopener noreferrer">medium.com/@jeffwesson</a> or <a href="https://twitter.com/jeffwesson" target="_blank" rel="noopener noreferrer">twitter.com/jeffwesson</a>.
		</p>
		<p>
			I encourage you to look through my <Link to="/portfolio">portfolio</Link> of recent web projects and to please contact me if you're interested in working together. I look forward to hearing from you.
		</p>
	</section>
);

export default About;
