import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.actions'
// 解构 props
function Counter({ count, increment, decrement }) {
	return (
		<div>
			<button onClick={increment}>+</button>
			<span>{count}</span>
			<button onClick={decrement}>-</button>
		</div>
	)
}

// 1. connect 方法会帮助我们订阅store 当store中的状态发生更改的时候 会帮助我们重新渲染组件
// 2. connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件
// 3. connect 方法可以让我们获取 dispatch 方法

const mapStateToProps = (state) => ({
	count: state.count,
	a: 'b',
})

// 返回一个对象，被映射到组件的 props 中
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(counterActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
