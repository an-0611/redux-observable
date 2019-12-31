// import { createAction } from 'redux-actions'

// export const INCREMENT = 'INCREMENT'
// export const increment = createAction(INCREMENT, mount => mount, () => ({  }));
// increment(20);

// export const GET_DATA = 'GET_DATA'; // Action
// export const GET_DATA_1 = 'GET_DATA_1'; // Action

// export const makeCreateAction = (type, ...keys) => {
//     return (...data) => {
//         let action = {type};
//         keys.forEach((v,i) => action[v] = data[i]);
//         return action;
//     }
// }

// // export const getData = makeCreateAction(GET_DATA, index); // Action Creator
// // export const getData1 = makeCreateAction(GET_DATA_1, index); // Action Creator

// // export const getData = (index) => { 
// //     return {
// //         type: GET_DATA,
// //         index
// //     };
// //  };