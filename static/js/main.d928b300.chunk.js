(this['webpackJsonpjeffwesson.github.io'] = this['webpackJsonpjeffwesson.github.io'] || []).push([
	[0],
	{
		25: function (e, t, n) {},
		26: function (e, t, n) {},
		32: function (e, t, n) {},
		33: function (e, t, n) {},
		34: function (e, t, n) {},
		35: function (e, t, n) {},
		36: function (e, t, n) {},
		37: function (e, t, n) {
			'use strict';
			n.r(t);
			var i = n(0),
				s = n(1),
				o = n.n(s),
				a = n(18),
				r = n.n(a),
				c = (n(25), n(3)),
				l = n(8),
				d =
					(n(26),
					function () {
						return Object(i.jsxs)('header', {
							className: 'text-center',
							children: [
								Object(i.jsxs)('hgroup', {
									children: [
										Object(i.jsx)('h1', { children: 'Jeff Wesson' }),
										Object(i.jsx)('h2', { children: 'Senior Software Engineer' }),
									],
								}),
								Object(i.jsx)('nav', {
									children: Object(i.jsxs)('ul', {
										className: 'nav nav-justified',
										children: [
											Object(i.jsx)('li', {
												children: Object(i.jsx)(l.c, {
													to: '/',
													className: 'nav-link',
													isActive: function (e, t) {
														return !/\/portfolio/i.test(t.pathname);
													},
													children: 'About',
												}),
											}),
											Object(i.jsx)('li', {
												children: Object(i.jsx)(l.c, {
													to: '/portfolio',
													className: 'nav-link',
													exact: !0,
													strict: !0,
													isActive: function (e, t) {
														return /\/portfolio/i.test(t.pathname);
													},
													children: 'Portfolio',
												}),
											}),
										],
									}),
								}),
							],
						});
					}),
				h = n(16),
				m =
					(n(32),
					function (e) {
						return Object(i.jsx)(
							'a',
							Object(h.a)(
								Object(h.a)(
									{ href: e.href, target: e.blank ? '_blank' : '', rel: 'noopener noreferrer' },
									e
								),
								{},
								{ children: e.children }
							)
						);
					}),
				p =
					(n(33),
					function () {
						return Object(i.jsxs)('section', {
							className: 'About',
							children: [
								Object(i.jsx)('h3', { children: "Hello, I'm Jeff" }),
								Object(i.jsxs)('p', {
									children: [
										"I've been building websites for nearly two decades using a variety of development tools; from static HTML & CSS sites, to Content Management Systems using the LAMP stack, and Single Page Applications using the MEAN stack. ",
										Object(i.jsx)('strong', {
											children:
												'I currently work within the React ecosystem creating rich Web Applications',
										}),
										'. The Web has already proven to be a very powerful tool. And now, with the the number of mobile devices running modern browsers continuing to increase and an Internet of Things on the horizon, the Web looks poised to gain an even larger market share of data.',
									],
								}),
								Object(i.jsx)('p', {
									children:
										'I am also a cultural anthropologist capable of teasing out valuable information as to how users use the Web. Putting such information to use throughout the entire development process enables me to better understand what users expect and why.',
								}),
								Object(i.jsxs)('p', {
									children: [
										'You can find any blatherings on code or the occasional baseball tweet',
										' ',
										Object(i.jsx)(m, {
											href: 'https://twitter.com/jeffwesson',
											children: '@jeffwesson',
										}),
										' and I try to',
										' ',
										Object(i.jsx)(m, { href: 'https://medium.com/@jeffwesson', children: 'blog' }),
										' when I can find the time.',
									],
								}),
								Object(i.jsxs)('p', {
									children: [
										'I encourage you to look through my ',
										Object(i.jsx)(l.b, { to: '/portfolio', children: 'portfolio' }),
										" of recent web projects and to please contact me if you're interested in working together. I look forward to hearing from you.",
									],
								}),
							],
						});
					}),
				j = {
					projects: [
						{
							title: 'InMobi',
							description:
								'Worked as a JavaScript engineer on InMobi Studio \u2013 a rich media ad platform which enables users to author MRAID (Mobile Rich Media Ad Interface Definitions) compliant HTML5 creatives that run on various platforms and mobile ad networks. Worked with 2-4 other front end engineers to build and maintain core JS ad code, UI apps including analytics dashboards, and the actual creative Studio using Flash.',
							image: '/images/inmobi-studio.jpg',
							inDevelopment: !1,
							address: 'https://inmobi.com',
							toolsUsed: ['Google Closure', 'Backbone', 'Angular(1.x)', 'Polymer'],
						},
						{
							title: 'Audi USA',
							description:
								'Worked with a team to develop and maintain a web experience and platform with which both Audi customers as well as Audi Brand Specialists could interact.',
							image: '/images/audiusa-devices.jpg',
							inDevelopment: !1,
							address: 'https://audiusa.com',
							toolsUsed: [
								'Backbone.js',
								'jQuery',
								'Underscore.js',
								'Adobe CQ5',
								'HTML5',
								'CSS3',
								'Bower',
								'Grunt',
								'npm',
								'vagrant',
								'maven',
							],
						},
						{
							title: "Levi's Vintage Clothing",
							description: "Worked with a team to develop enhancements for Levi's Vintage Clothing.",
							image: '/images/lvc-grid.png',
							inDevelopment: !1,
							toolsUsed: ['AngularJS', 'HTML5', 'CSS3', 'Bower', 'Gulp', 'Contentful'],
						},
						{
							title: 'Planama',
							description:
								'Working with a small team of 2-3 developers on a sprint planning solution for agile and scrum development teams. Planama uses bleeding edge technologies including realtime database syncing, through Firebase, to achieve a much more lightweight and easy-to-iterate product.',
							image: '/images/planama.png',
							inDevelopment: !0,
							address: 'https://planama.firebaseapp.com',
							toolsUsed: [
								'AngularJS',
								'Firebase',
								'HTML5',
								'CSS3',
								'Yeoman',
								'Bower',
								'Grunt',
								'npm',
								'Twitter Bootstrap',
							],
						},
						{
							title: 'Gogo Bus',
							description:
								"An Angular app serving General Transit Feed Specification (GTFS) data stored on MongoDB interfacing with Express running on Node. I'm making use of a nice Node module which pulls up-to-date GTFS data for any given transit agency, parses the xml, and populates a database on Mongo. This project is intended to result in an easy-to-customize transit app with which developers can learn and play.",
							image: '/images/gogobus.png',
							inDevelopment: !0,
							address: '',
							toolsUsed: [
								'AngularJS',
								'ExpressJS',
								'Mongoose',
								'MongoDB',
								'GTFS Data',
								'Node',
								'HTML5',
								'CSS3',
								'Yeoman',
								'Bower',
								'Grunt',
								'npm',
								'Twitter Bootstrap',
							],
						},
						{
							title: 'Turbo International',
							description:
								'Working under a non-disclosure agreement to retool and otherwise improve an online e-commerce solution.',
							image: '/images/turbo-international.png',
							inDevelopment: !1,
							address: 'https://www.turbointernational.com/#/',
							toolsUsed: [
								'AngularJS',
								'PHP',
								'HTML5',
								'CSS3',
								'MySQL',
								'Magento',
								'Yeoman',
								'Bower',
								'Grunt',
								'npm',
								'Twitter Bootstrap',
							],
						},
						{
							title: 'Japanese American Nurseries',
							description:
								"Worked within the client's design to build a mobile-first, responsive theme on top of a custom WordPress-as-a-CMS installation including custom content types, plugins, and widgets. This project is helping to build a community and spread valuable cultural and historical information.",
							image: '/images/janurseries.png',
							client: 'Anthropological Studies Center',
							inDevelopment: !1,
							address: 'http://janurseries.com',
							toolsUsed: [
								'PHP',
								'JS',
								'HTML5',
								'CSS3',
								'MySQL',
								'WordPress',
								'Bower',
								'Twitter Bootstrap',
							],
						},
						{
							title: 'Jeff Wesson WordPress',
							description:
								'I designed a fairly simple, mobile-first, responsive theme to accommodate a blog. I opted for super simplicity and only incorporated bare necessities such as recent blog posts, search, and archives based on categories and tags. I have since, however, relocated to Medium and Twitter for any writing needs.',
							image: '/images/jeffwesson.png',
							inDevelopment: !1,
							toolsUsed: [
								'PHP',
								'HTML5',
								'CSS3',
								'MySQL',
								'Yeoman',
								'Bower',
								'Grunt',
								'npm',
								'Twitter Bootstrap',
							],
						},
						{
							title: 'Gypsy Cafe',
							description:
								"Worked closely with a designer to achieve a pixel-perfect representation of their vision while incorporating common UI thinking and best practices. Using WordPress-as-a-CMS, I built a menu system for updating items that doesn't just produce a pdf, which can be severely lacking concerning accessibility.",
							image: '/images/gypsycafe.png',
							inDevelopment: !1,
							toolsUsed: ['PHP', 'HTML5', 'CSS3', 'MySQL'],
						},
						{
							title: 'W Designs',
							description:
								'Version 1.0 of a collaborative effort to build more appealing, informative, useful, and functional websites for local businesses in Sonoma County, California. This project uses semantic HTML5 and cleverly laid-out CSS3 to accomplish a clean and minimalistic approach to web development.',
							image: '/images/wdesigns.png',
							inDevelopment: !1,
							toolsUsed: ['HTML5', 'CSS3'],
						},
					],
				},
				u =
					(n(34),
					function () {
						var e = j && Array.isArray(j.projects) ? j.projects : [];
						return Object(i.jsx)('section', {
							children: Object(i.jsx)('ul', {
								className: 'list-unstyled',
								children: e.map(function (e, t) {
									return Object(i.jsxs)(
										'li',
										{
											className: 'portfolio-item',
											children: [
												Object(i.jsxs)('dl', {
													children: [
														Object(i.jsx)('dt', { children: e.title }),
														Object(i.jsx)('dd', { children: e.description }),
														Object(i.jsx)('dt', { children: 'Tools Used' }),
														Object(i.jsx)('dd', {
															className: 'tools-used',
															children: e.toolsUsed.join(', '),
														}),
													],
												}),
												Object(i.jsx)('span', {
													children: Object(i.jsx)('a', {
														href: e.address,
														target: '_blank',
														rel: 'noopener noreferrer',
														children: e.address,
													}),
												}),
												e.image &&
													Object(i.jsx)('img', {
														src: e.image,
														alt: 'Example of work for '.concat(e.title),
														className: 'img-responsive',
													}),
											],
										},
										t
									);
								}),
							}),
						});
					}),
				b =
					(n(35),
					function () {
						return Object(i.jsxs)('footer', {
							children: [
								Object(i.jsxs)('ul', {
									className: 'list-unstyled',
									children: [
										Object(i.jsx)('li', {
											children: Object(i.jsx)(m, {
												href: 'https://github.com/jeffwesson/',
												title: 'Github',
												children: Object(i.jsx)('i', { className: 'fab fa-github fa-3x' }),
											}),
										}),
										Object(i.jsx)('li', {
											children: Object(i.jsx)(m, {
												href: 'https://twitter.com/jeffwesson',
												title: 'Twitter',
												children: Object(i.jsx)('i', { className: 'fab fa-twitter fa-3x' }),
											}),
										}),
										Object(i.jsx)('li', {
											children: Object(i.jsx)(m, {
												href: 'https://medium.com/@jeffwesson',
												title: 'Blog',
												children: Object(i.jsx)('i', { className: 'fab fa-medium fa-3x' }),
											}),
										}),
										Object(i.jsx)('li', {
											children: Object(i.jsx)(m, {
												href: 'https://linkedin.com/in/jswesson',
												title: 'LinkedIn',
												children: Object(i.jsx)('i', { className: 'fab fa-linkedin fa-3x' }),
											}),
										}),
										Object(i.jsx)('li', {
											children: Object(i.jsx)(m, {
												href: 'mailto:jeffwesson@me.com',
												title: 'Email',
												children: Object(i.jsx)('i', { className: 'fas fa-envelope fa-3x' }),
											}),
										}),
										Object(i.jsx)('li', {
											children: Object(i.jsx)(m, {
												href: 'https://keybase.io/jeffwesson',
												title: 'Keybase',
												children: Object(i.jsx)('i', { className: 'fab fa-keybase fa-3x' }),
											}),
										}),
									],
								}),
								Object(i.jsxs)('p', {
									className: 'text-center',
									children: ['\xa9 ', new Date().getFullYear(), ' Jeff Wesson'],
								}),
							],
						});
					}),
				f = n(39),
				g = n(40),
				x = n(41),
				w =
					(n(36),
					function () {
						var e = document.querySelector('#loading');
						return (
							e && (e.style.display = 'none'),
							Object(i.jsxs)(f.a, {
								children: [
									Object(i.jsx)(g.a, {
										children: Object(i.jsx)(x.a, { xs: 12, children: Object(i.jsx)(d, {}) }),
									}),
									Object(i.jsx)(g.a, {
										children: Object(i.jsx)(x.a, {
											xs: 12,
											children: Object(i.jsxs)(c.c, {
												children: [
													Object(i.jsx)(c.a, { exact: !0, path: '/', component: p }),
													Object(i.jsx)(c.a, { exact: !0, path: '/portfolio', component: u }),
													Object(i.jsx)(c.a, { component: p }),
												],
											}),
										}),
									}),
									Object(i.jsx)(g.a, {
										children: Object(i.jsx)(x.a, { xs: 12, children: Object(i.jsx)(b, {}) }),
									}),
								],
							})
						);
					});
			r.a.render(
				Object(i.jsx)(o.a.StrictMode, { children: Object(i.jsx)(l.a, { children: Object(i.jsx)(w, {}) }) }),
				document.getElementById('root')
			);
		},
	},
	[[37, 1, 2]],
]);
//# sourceMappingURL=main.d928b300.chunk.js.map
