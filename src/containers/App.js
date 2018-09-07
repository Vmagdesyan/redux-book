import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { User } from '../components/User'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

import './App.css'

class App extends Component {
	render() {
		const { user, page, getPhotos, handleLogin } = this.props
		return (
			<div className="app">
				<Page
					photos={page.photos}
					isFetching={page.isFetching}
					year={page.year}
					getPhotos={getPhotos}
				/>
				<User
					name={user.name}
					isFetching={user.isFetching}
					error={user.error}
					handleLogin={handleLogin}
				/>
			</div>
		)
	}
}

const mapStateToProps = store => {
	console.log(store)
	return {
		user: store.user,
		page: store.page,
	}
}
const mapDispatchToProps = dispatch => ({
	getMorePhotos: year => dispatch(getPhotos(year)),
	handleLogin: () => dispatch(handleLogin()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
