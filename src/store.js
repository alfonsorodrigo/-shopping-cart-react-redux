import {createStore} from 'redux';

const reducer = (state,action) =>{
	if(action.type === "ADD_TO_CART"){
		if(action.product.hasOwnProperty('count')){
			action.product.count = action.product.count + 1;
		}else{
			action.product.count = 1;
			return{
				...state,
				cart:state.cart.concat(action.product)
			};
		}		
	}
	else if(action.type === "REMOVE_FROM_CART"){
		if(action.product.count === 1){
			delete action.product["count"];
			return{
				...state,
				cart:state.cart.filter(product => product.id !== action.product.id)
			};
		}else{
			action.product.count = action.product.count - 1;
		}
	}

	return state;
}

export default createStore(reducer,{cart:[]} );