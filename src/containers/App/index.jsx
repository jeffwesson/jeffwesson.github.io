import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/index';
import About from '../About/index';
import Portfolio from '../Portfolio/index';
import Footer from '../Footer/index';

import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const App = () => {
	const el = document.querySelector('#loading');
	if (el) {
		el.style.display = 'none';
	}
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Switch>
						<Route exact={true} path="/" component={About} />
						<Route exact={true} path="/portfolio" component={Portfolio} />
						<Route component={About} />
					</Switch>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Footer />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
