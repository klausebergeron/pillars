//redux site: redux.js.org
import {createStore} from 'redux'

//action generators: functions that return action objects
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
       return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
    return state;
  }
});


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

//Actions - object that gets sent to the store
//ie walk, stop_walking, sit, work, etc.
//increment, decrement, reset
//action type names in redux are caps by convention
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }))
//unsubscribe(); //stops watching

store.dispatch ({
  type: 'RESET'
});
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});
