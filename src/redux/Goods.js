import * as ActionTypes from './ActionTypes'

export const Goods = (state = {
        isLoading:true,errMess:null,goods:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GOOD:
        var good = action.payload;
        return {...state,isLoading:false,errMess:null,goods:state.goods.concat(good)}
    

        default:
          return state;
      }
};