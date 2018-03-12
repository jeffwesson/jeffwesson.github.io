import React, { Component } from 'react';
import { portfolio as portfolioData } from '../../db';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		const projects = portfolioData && Array.isArray(portfolioData.projects)
			? portfolioData.projects
			: [];
		this.state = {
			projects,
			portfolioLoaded: !!projects.length
		};
	}

	render() {
		return (
			<section>
				<ul>
					{
						this.state.projects.map((project, i) => (
							<li key={i}>
								{
									project.inDevelopment ? <div><span></span> Currently in development</div> : ''
								}
								<dl>
									<dt>{project.title}</dt>
									<dd>{project.description}</dd>
									<dt>Tools Used</dt>
									<dd>
										<ul>
											{
												project.toolsUsed.map((toolUsed, i) => (
													<li key={i}>{toolUsed}</li>
												))
											}
										</ul>
									</dd>
								</dl>
								<span>
									<a href={project.address} target="_blank" rel="noopener noreferrer">{project.address}</a>
								</span>
								<img src={project.image} alt={`Example of work for ${project.title}`} />
							</li>
						))
					}
				</ul>
			</section>
		)
	}
}

export default Portfolio;
