/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:48:05
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 19:27:21
 * @Description:
 */

import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from '../const/counter.const'

export const increment = (payload) => ({
	type: INCREMENT,
	payload,
})

export const decrement = (payload) => ({
	type: DECREMENT,
	payload,
})

export const increment_async = (payload) => ({ type: INCREMENT_ASYNC, payload })
