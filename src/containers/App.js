import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { User } from '../components/User'
import { getPhotos } from '../actions/PageActions'

import './App.css'

class App extends Component {
	render() {
		const { user, page, getPhotos } = this.props
		return (
			<div className="app">
				<Page
					photos={page.photos}
					isFetching={page.isFetching}
					year={page.year}
					getPhotos={getPhotos}
				/>
				<User name={user.name} />
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
	getPhotos: year => dispatch(getPhotos(year)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
