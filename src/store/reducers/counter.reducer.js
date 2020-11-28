/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:57:41
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 18:08:43
 * @Description:
 */

import { INCREMENT, DECREMENT } from '../const/counter.const'

const initialState = {
	count: 0,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + action.payload,
			}
		case DECREMENT:
			return {
				count: state.count - action.payload,
			}
		default:
			return state
	}
}
