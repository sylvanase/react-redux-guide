import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 提供 Provider 和 connect
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import { createStore } from 'redux'

const initialState = {
	count: 0,
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'increment':
			return {
				count: state.count + 1,
			}
		case 'decrement':
			return {
				count: state.count - 1,
			}
		default:
			return state
	}
}

const store = createStore(reducer)

const increment = { type: 'increment' }
const decrement = { type: 'decrement' }

ReactDOM.render(
	// 通过provider组件 将 store 放在了全局的组件可以够的到的地方
	<Provider store={store}>
		<Counter />
	</Provider>,
	document.getElementById('root')
)
