import * as ActionTypes from './ActionTypes';

export const Users = (state = {users:[]},action) =>{
	switch(action.type){
		case ActionTypes.ADD_USER:
       		var user = action.payload;
        	return { ...state, users: state.users.concat(user)};
		default:
			return state;
	}
}