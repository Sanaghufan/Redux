import {createStore , applyMiddleware } from 'redux';
import logger from 'redux-logger';
const store = createStore(reducer,applyMiddleware(logger.default));
function reducer(state = {amount:1}, action){//initial value of state is assigned as 1
    if(action.type === 'increment'){
        //immutability
        //state.amount = state.amount+1
        return {amount:state.amount+1}// this will be commented in immutability
    }

    return state;
}
//console.log(store.getState());//action is not a part of redux , it is a convention that you have to send such type of objects{type:'increment'}
const history = []
//store.subscribe(()=>{
// history.push(store.getState());
 // console.log("History",history)
    // console.log(store.getState());
// })
// store.dispatch({type:"increment"})
//console.log(store.getState());
//important concept of immutability: you should not directly change the state
//now to avoid multiple console log we have subscribe , it will run whenevr state is change
setInterval(()=>{
    store.dispatch({type:"increment"})
},3000)
