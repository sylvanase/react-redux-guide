/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:48:05
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 22:35:31
 * @Description:
 */

import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from '../const/counter.const'
import { createAction } from 'redux-actions'

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)
export const increment_async = createAction(INCREMENT_ASYNC)

// export const increment = (payload) => ({
// 	type: INCREMENT,
// 	payload,
// })

// export const decrement = (payload) => ({
// 	type: DECREMENT,
// 	payload,
// })

// export const increment_async = (payload) => ({ type: INCREMENT_ASYNC, payload })
