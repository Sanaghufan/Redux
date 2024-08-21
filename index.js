import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import logger from "redux-logger";
import {thunk} from "redux-thunk"
const init = "init";
const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";
const store = createStore(reducer, applyMiddleware(logger.default,thunk));
//we will assume that we will initialize the amount with the user's amount .  and let's say first id from json data will be our user
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

setInterval(() => {
  store.dispatch(initUser);
}, 3000);

async function initUser(dispatch,getState) {
  const { data } = await axios.get("http://localhost:3000/account/1");
  return dispatch({ type: init, payload: data.amount });
}
function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}
