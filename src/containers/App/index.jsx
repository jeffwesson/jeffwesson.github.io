import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import About from '../About';
import Portfolio from '../Portfolio';
import Footer from '../Footer';

import { Grid, Row, Col } from 'react-bootstrap';
import './index.css';

const App = () => {
	const el = document.querySelector('#loading');
	if (el) {
		el.style.display = 'none';
	}
	return (
		<Grid>
			<Row>
				<Col xs={12}>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Switch>
						<Route exact path="/" component={About} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route component={About} />
					</Switch>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Footer />
				</Col>
			</Row>
		</Grid>
	);
};

export default App;
