/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:57:41
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 18:03:36
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
				count: state.count + 1,
			}
		case DECREMENT:
			return {
				count: state.count - 1,
			}
		default:
			return state
	}
}
