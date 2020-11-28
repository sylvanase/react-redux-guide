/*
 * @Author: sylvanas
 * @Date: 2020-11-28 17:56:56
 * @LastEditors: sylvanas
 * @LastEditTime: 2020-11-28 18:00:40
 * @Description:
 */

import { createStore } from 'redux'
import reducer from './reducers/counter.reducer'

export const store = createStore(reducer)
