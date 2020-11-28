/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:56:56
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 18:25:47
 * @Description:
 */

import { createStore } from 'redux'
import RootReducer from './reducers/root.reducer'

export const store = createStore(RootReducer)
