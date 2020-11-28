/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:57:41
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 22:42:30
 * @Description:
 */

import { INCREMENT, DECREMENT } from '../const/counter.const'
import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../actions/counter.actions'
const initialState = {
	count: 0,
}

const handleIncrement = (state, action) => ({
	count: state.count + action.payload,
})

const handleDecrement = (state, action) => ({
	count: state.count - action.payload,
})

export default createReducer(
	{
		[increment]: handleIncrement,
		[decrement]: handleDecrement,
	},
	initialState
)
// export default (state = initialState, action) => {
// 	switch (action.type) {
// 		case INCREMENT:
// 			return {
// 				count: state.count + action.payload,
// 			}
// 		case DECREMENT:
// 			return {
// 				count: state.count - action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
