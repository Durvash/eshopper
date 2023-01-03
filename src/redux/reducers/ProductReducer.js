import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "../../config/Constants";

export const ProductReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_CART:
            
            // console.log(state,1);
            var exist = 0;
            let qty = 1;
            if(action.data.type == "input") {
                qty = action.data.qty;
            } else if(action.data.type == "minus") {
                qty = -1;
            }

            action.data = {...action.data, qty:qty, total_price:action.data.price};

            var cartArr = state.filter((item) => {
                if(item.id === action.data.id) {
                    item.qty += action.data.qty;
                    item.total_price = item.price * item.qty;
                    exist = 1;
                }
            });

            if (exist == 1) {
                return [
                    ...state
                ]
            }
            
            return [
                ...state,
                action.data
            ]
            break;
        
        case UPDATE_TO_CART:

                // console.log(state,1);
                var exist = 0;
                var cartArr = state.filter((item) => {
                    if(item.id === action.data.id) {
                        exist = 1;
                    }
                });
    
                if (exist == 1) {
                    return [
                        ...state,
                        cartArr
                    ]
                }
                
                return [
                    ...state
                ]
                break;
            
        case REMOVE_TO_CART:

                var newCartArr = state.filter((item) => { return item.id !== action.id });

                state = newCartArr;

                return [
                    ...state
                ]
                break;
                
        default:
            return state;
    }
}
