export default (store) => (next) => (action) => {
	console.log(store)
	console.log(action)
	// next 传递给下一个action
	next(action)
}
