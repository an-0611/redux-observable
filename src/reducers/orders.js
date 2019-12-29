import { handleActions } from 'redux-actions'
// import { v1 } from 'uuid'

// import { LIST_TYPE } from '../lib/constant'

const itemFactory = ({ name, price, note }) => ({
  _id: v1(),
  name,
  price,
  note,
})

const orders = handleActions({
  [LIST_TYPE.ADD_ITEM]: (state, { payload: order }) => {
    return [
      ...state,
      itemFactory(order),
    ]
  },
  [LIST_TYPE.DELETE_ITEM]: (state, { payload: index }) => {
    return state.filter((v, k) => k !== index)
  },
  [LIST_TYPE.UPDATE_ITEM]: (state, { payload: { index, data } }) => {
    const arrayCopy = Array.from(state)
    const oriObject = arrayCopy[index]
    arrayCopy[index] = Object.assign({}, oriObject, data)
    return arrayCopy
  }
}, [
  itemFactory({
    name: '珍珠奶茶',
    price: 50,
    note: `不要奶\n不要珍珠`,
  }),
  itemFactory({
    name: '冬瓜茶',
    price: 20,
  }),
])

export default orders