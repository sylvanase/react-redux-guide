import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 提供 Provider 和 connect
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import { store } from './store'

ReactDOM.render(
	// 通过provider组件 将 store 放在了全局的组件可以够的到的地方
	<Provider store={store}>
		<Counter />
	</Provider>,
	document.getElementById('root')
)
