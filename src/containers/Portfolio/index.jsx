import React from 'react';
import { portfolio as portfolioData } from '../../db';
import './index.css';

const Portfolio = () => {
	const projects = portfolioData && Array.isArray(portfolioData.projects)
		? portfolioData.projects
		: [];
	return (
		<section>
			<ul className="list-unstyled">
				{
					projects.map((project, i) => (
						<li key={i} className="portfolio-item">
							{
								project.inDevelopment ? <div className="pull-right in-development"><span></span> Currently in development</div> : ''
							}
							<dl>
								<dt>{project.title}</dt>
								<dd>{project.description}</dd>
								<dt>Tools Used</dt>
								<dd className="tools-used">
									<ul className="list-inline">
										{
											project.toolsUsed.map((toolUsed, i, a) => {
												if (i === a.length - 1) {
													return (
														<li key={i}>and {toolUsed}.</li>
													)
												}

												return (
													<li key={i}>{toolUsed},</li>
												)
											})
										}
									</ul>
								</dd>
							</dl>
							<span>
								<a href={project.address} target="_blank" rel="noopener noreferrer">{project.address}</a>
							</span>
							{
								project.image && (
									<img src={project.image} alt={`Example of work for ${project.title}`} className="img-responsive" />
								)
							}
						</li>
					))
				}
			</ul>
		</section>
	)
};

export default Portfolio;
