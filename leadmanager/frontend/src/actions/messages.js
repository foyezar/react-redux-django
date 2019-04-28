import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE MESSAGE
export const createMessage = (msg) => {
	return {
		type: CREATE_MESSAGE,
		payload: msg
	};
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
	return {
		type: GET_ERRORS,
		payload: { msg, status }
	};
};
{
	const errors = {
		msg: err.response.data,
		status: err.response.status
	};

	dispatch({
		type: GET_ERRORS,
		payload: errors
	});
}
