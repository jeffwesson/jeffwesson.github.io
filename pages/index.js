import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Jeff Wesson</title>
				<link rel="icon" href="/favicon.ico" />
				<script defer src="fa-icons.min.js"></script>
			</Head>
			<Header></Header>
			<main className="About">
				<h3>Hello, I'm Jeff</h3>
				<p>
					I've been building websites for nearly two decades using a variety of development tools; from static
					HTML &amp; CSS sites, to Content Management Systems using the LAMP stack, and Single Page
					Applications using the MEAN stack.{' '}
					<strong>I currently work within the React ecosystem creating rich Web Applications</strong>. The Web
					has already proven to be a very powerful tool. And now, with the the number of mobile devices
					running modern browsers continuing to increase and an Internet of Things on the horizon, the Web
					looks poised to gain an even larger market share of data.
				</p>
				<p>
					I am also a cultural anthropologist capable of teasing out valuable information as to how users use
					the Web. Putting such information to use throughout the entire development process enables me to
					better understand what users expect and why.
				</p>
				<p>
					You can find any blatherings on code or the occasional baseball tweet{' '}
					<a href="https://twitter.com/jeffwesson" blank>
						@jeffwesson
					</a>{' '}
					and I try to{' '}
					<a href="https://jeffwesson.github.io/blog/" blank>
						blog
					</a>{' '}
					when I can find the time.
				</p>
				<p>
					I encourage you to look through my <Link href="/portfolio">portfolio</Link> of recent web projects
					and to please contact me if you're interested in working together. I look forward to hearing from
					you.
				</p>
			</main>
			<Footer></Footer>
		</>
	);
}
