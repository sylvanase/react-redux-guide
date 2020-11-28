/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:48:05
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 18:10:47
 * @Description:
 */

import { INCREMENT, DECREMENT } from '../const/counter.const'

export const increment = (payload) => ({
	type: INCREMENT,
	payload,
})

export const decrement = (payload) => ({
	type: DECREMENT,
	payload,
})
