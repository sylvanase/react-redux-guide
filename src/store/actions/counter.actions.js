/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:48:05
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 18:04:20
 * @Description:
 */

import { INCREMENT, DECREMENT } from '../const/counter.const'

export const increment = () => ({
	type: INCREMENT,
})

export const decrement = () => ({
	type: DECREMENT,
})
