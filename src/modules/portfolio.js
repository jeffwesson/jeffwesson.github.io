import { portfolio } from '../db';
export const GET_PROJECTS = 'portfolio/GET_PROJECTS';

const initialState = {
	projects: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return {
				...state,
				projects: action.payload,
				portfolioLoaded: true
			};

		default:
			return state;
	}
};

export const getProjects = () => {
	return dispatch => {
		dispatch({
			type: GET_PROJECTS,
			payload: portfolio.projects
		});
	};
};
