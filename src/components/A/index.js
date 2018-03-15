import React from 'react';
import './index.css';

const A = props => (
	<a href={props.href} target={props.blank ? '_blank' : ''} rel="noopener noreferrer" {...props}>
		{props.children}
	</a>
);

export default A;
