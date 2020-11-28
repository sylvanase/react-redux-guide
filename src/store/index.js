/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:56:56
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 19:28:22
 * @Description:
 */

import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/root.reducer'
// import logger from './middleware/logger'
// import test from './middleware/test'
// import thunk from 'redux-thunk'
import createSagaMidddleware from 'redux-saga'
import counterSaga from './sagas/counter.saga'

// 创建 sagaMiddleware
const sagaMiddleware = createSagaMidddleware()

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(counterSaga)
