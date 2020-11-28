/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:56:56
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 18:49:00
 * @Description:
 */

import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/root.reducer'
import logger from './middleware/logger'
import test from './middleware/test'
import thunk from './middleware/thunk'

export const store = createStore(
	RootReducer,
	applyMiddleware(logger, test, thunk)
)
